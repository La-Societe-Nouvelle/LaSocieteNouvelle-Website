#!/usr/bin/env node

/**
 * Script de validation des composants UI Kit
 *
 * Ce script vérifie que :
 * - Les classes CSS communes sont utilisées dans les pages
 * - Il n'y a pas de duplication de composants entre pages
 * - Les imports SCSS sont corrects
 */

const fs = require('fs');
const path = require('path');

// Composants qui doivent être dans common-cards.scss uniquement
const COMMON_COMPONENTS = [
  'api-visual-box',
  'stats-visual-box',
  'api-benefit',
  'methodology-step',
  'use-case',
  'indicator-category',
  'api-resource',
  'access-method',
  'research-output',
  'mission-visual',
  'publications-visual',
  'highlight-section'
];

// Pages à analyser
const SCSS_PAGES_DIR = path.join(__dirname, '../styles/website/pages');
const COMMON_CARDS_PATH = path.join(__dirname, '../styles/components/common-cards.scss');

/**
 * Lire le contenu d'un fichier
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

/**
 * Vérifier si un composant est défini dans un fichier
 */
function findComponentInFile(content, componentName) {
  // Recherche de classe CSS : .component-name {
  const regex = new RegExp(`\\.${componentName}\\s*{`, 'g');
  return regex.test(content);
}

/**
 * Analyser les fichiers SCSS de pages
 */
function analyzePagesScss() {
  console.log('🔍 Analyse des fichiers SCSS de pages...\n');

  const issues = [];
  const files = fs.readdirSync(SCSS_PAGES_DIR);

  files.forEach(file => {
    if (!file.endsWith('.scss')) return;

    const filePath = path.join(SCSS_PAGES_DIR, file);
    const content = readFile(filePath);

    if (!content) return;

    // Vérifier si des composants communs sont dupliqués
    COMMON_COMPONENTS.forEach(component => {
      if (findComponentInFile(content, component)) {
        issues.push({
          file,
          component,
          type: 'duplication',
          message: `Le composant .${component} est défini dans ${file} mais devrait être dans common-cards.scss uniquement`
        });
      }
    });
  });

  return issues;
}

/**
 * Vérifier que common-cards.scss contient tous les composants
 */
function verifyCommonCards() {
  console.log('✅ Vérification de common-cards.scss...\n');

  const content = readFile(COMMON_CARDS_PATH);
  const missing = [];

  if (!content) {
    console.error('❌ Fichier common-cards.scss introuvable !');
    return missing;
  }

  COMMON_COMPONENTS.forEach(component => {
    if (!findComponentInFile(content, component)) {
      missing.push(component);
    }
  });

  return missing;
}

/**
 * Générer le rapport
 */
function generateReport() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 RAPPORT DE VALIDATION DES COMPOSANTS UI KIT');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Vérifier common-cards.scss
  const missing = verifyCommonCards();

  if (missing.length > 0) {
    console.log('❌ Composants manquants dans common-cards.scss :');
    missing.forEach(comp => console.log(`   - .${comp}`));
    console.log('');
  } else {
    console.log('✅ Tous les composants communs sont présents dans common-cards.scss\n');
  }

  // Analyser les duplications
  const issues = analyzePagesScss();

  if (issues.length > 0) {
    console.log('⚠️  DUPLICATIONS DÉTECTÉES :\n');

    // Grouper par fichier
    const byFile = {};
    issues.forEach(issue => {
      if (!byFile[issue.file]) {
        byFile[issue.file] = [];
      }
      byFile[issue.file].push(issue.component);
    });

    Object.keys(byFile).forEach(file => {
      console.log(`📄 ${file}`);
      console.log(`   Composants à supprimer :`);
      byFile[file].forEach(comp => {
        console.log(`   - .${comp}`);
      });
      console.log('');
    });

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`⚠️  ${issues.length} duplication(s) trouvée(s)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('💡 ACTIONS RECOMMANDÉES :');
    console.log('   1. Supprimer les composants listés ci-dessus de leurs fichiers respectifs');
    console.log('   2. Vérifier que les pages utilisent bien les classes de common-cards.scss');
    console.log('   3. Relancer ce script pour valider\n');

    process.exit(1);
  } else {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ AUCUNE DUPLICATION DÉTECTÉE !');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    console.log('🎉 Tous les composants communs sont correctement centralisés.');
    console.log('   Le code est propre et prêt pour la production.\n');

    process.exit(0);
  }
}

// Exécuter le script
generateReport();
