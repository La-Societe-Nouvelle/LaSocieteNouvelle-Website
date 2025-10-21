'use client';

import { useState } from 'react';
import { Table } from 'react-bootstrap';

export default function ImpactFactorsTable({ data = [] }) {
  const [sortConfig, setSortConfig] = useState({ key: 'activity', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');


  // Filter data based on search term
  const filteredData = Array.isArray(data) ? data.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.activity?.toLowerCase().includes(searchLower) ||
      item.description?.toLowerCase().includes(searchLower) ||
      item.activityCode?.toLowerCase().includes(searchLower) ||
      item.activityLabel?.toLowerCase().includes(searchLower) ||
      searchTerm === '' // Si pas de recherche, tout passer
    );
  }) : [];

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    console.log('Sort config:', sortConfig);
    if (!sortConfig.key) return 0;
    console.log('Sorting by:', sortConfig);
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    const aString = String(aValue).toLowerCase();
    const bString = String(bValue).toLowerCase();

    if (aString < bString) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aString > bString) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <i className="bi bi-chevron-expand sort-icon"></i>;
    return sortConfig.direction === 'asc'
      ? <i className="bi bi-chevron-up sort-icon active"></i>
      : <i className="bi bi-chevron-down sort-icon active"></i>;
  };

  return (
    
    <div className="dataset-table-wrapper">


      {/* Table */}
      <div className="table-container">
        <Table className="dataset-table" hover>
          <thead>
            <tr>
              <th className="sticky-column sortable" onClick={() => handleSort('activity')}>
                Code NACE {getSortIcon('activity')}
              </th>
              <th className="sortable" onClick={() => handleSort('description')}>
                Libellé activité {getSortIcon('description')}
              </th>
              <th className="sortable text-end" onClick={() => handleSort('value')}>
                Valeur {getSortIcon('value')}
              </th>
              <th className="sortable text-end" onClick={() => handleSort('uncertainty')}>
                Incertitude {getSortIcon('uncertainty')}
              </th>

            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center no-data">
                  <i className="bi bi-info-circle me-2"></i>
                  Aucun résultat trouvé
                </td>
              </tr>
            ) : (
              sortedData.map((item, index) => (
                <tr key={index}>
                  <td className="sticky-column">
                    <span className="activity-code">{item.activity || '-'}</span>
                  </td>
                  <td className="activity-label">{item.description || '-'}</td>
                  <td className="text-end">
                    <span className="value-display">
                      {item.value !== null && item.value !== undefined
                        ? item.value.toLocaleString('fr-FR', { maximumFractionDigits: 2 })
                        : '-'}
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="uncertainty-display">
                      {item.uncertainty !== null && item.uncertainty !== undefined
                        ? `± ${item.uncertainty}%`
                        : '-'}
                    </span>
                  </td>
     
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
