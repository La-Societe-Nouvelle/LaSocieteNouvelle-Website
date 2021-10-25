// La Société Nouvelle

// Modules
import { jsPDF } from 'jspdf';

// Libraries
import metaData from '../../public/indic-data/metaData.json';

export function exportStatementPDF(data) 
{
  const doc = new jsPDF();

  // 
  doc.setFont("Calibri");
  let y = 10;

  // HEADER
  doc.setFontSize(16);
  doc.setFont("Calibri","bold");
  doc.text("BON POUR PUBLICATION",10,y);

  doc.setFont("Calibri","normal");
  doc.setFontSize(10);
  let today = new Date();
  y+=10;
  doc.text("Unité légale : "+data.siren,10,y); 
  y+=6;
  doc.text("Dénomination : "+data.denomination.toUpperCase(),10,y); 
  y+=6;
  doc.text("Année : "+data.year,10,y); 

  y+=20;
  doc.setFontSize(11);
  doc.setFont("Calibri","bold");
  doc.text("Données publiées :",10,y);
  doc.line(10,y+2,200,y+2);

  /* ----- TABLE ----- */

  let xValue = 150;
  let xUncertainty = 175;

  // first line table
  y+=15;
  doc.setFontSize(10);
  doc.setFont("Calibri","normal");
  doc.text("Valeur",150,y);
  doc.text("Incertitude",175,y);
  
  doc.line(10,y+2,200,y+2);
  Object.entries(data.socialfootprint).forEach(([indic,indicator]) => 
  {
    y+=6;
    doc.setFont("Calibri","bold");
    doc.text(metaData.libelle[indic],10,y);
    doc.setFont("Calibri","normal");
    doc.text(indicator.value+" "+metaData.unitCode[indic],xValue+10,y,{align: "left"});
    doc.setFontSize(8);
    doc.text(indicator.uncertainty+" %",xUncertainty+13,y,{align: "right"});
    doc.setFontSize(10);
    if (indicator.info.length > 0) {
      y+=6;
      doc.setFontSize(8);
      let infos = doc.splitTextToSize("NOTE : "+indicator.info,100);
      doc.text(infos,15,y);
      doc.setFontSize(10);
      y+=(infos.length-1)*4;
    }
  })
  doc.line(10,y+2,200,y+2);

  y+=20;
  doc.text("Edité le : "+String(today.getDate()).padStart(2,'0')+"/"+String(today.getMonth()+1).padStart(2,'0')+"/"+today.getFullYear(),10,y); 
  y+=6;
  doc.text("Déclaration faite par : "+data.declarant,10,y); 

  y+=10;
  doc.text("Le délai de publication des données est de 7 jours. Un mail de confirmation est envoyée.",10,y)

  y+=10;
  doc.text("Les données sont modifiables à tout moment et sur simple demande via l'adresse contact@lasocietenouvelle.org",10,y)

  // Base de page
  doc.text("La Société Nouvelle - Société immatriculée au RCS de Lille Métropole - 889 182 770",10,y)

  // Export
  doc.save("BonPourPublication_"+data.siren+"-"+String(today.getDate()).padStart(2,'0')+String(today.getMonth()+1).padStart(2,'0')+today.getFullYear()+".pdf");

}