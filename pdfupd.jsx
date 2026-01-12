import React, { useState } from "react";
import "./App.css";


export default function PdfConfigScreen() {
  const [mode, setMode] = useState("");
  const [fieldsRows, setFieldsRows] = useState([
    { f1: "", t1: "", f2: "", t2: "" },
  ]);
  const [tableRows, setTableRows] = useState([{ name: "", type: "" }]);

  /* ---------- Fields handlers ---------- */
  const addFieldRow = () => {
    setFieldsRows([...fieldsRows, { f1: "", t1: "", f2: "", t2: "" }]);
  };

  const deleteFieldRow = (index) => {
    if (fieldsRows.length === 1) {
      alert("Can't delete, It's last row");
      return;
    }
    setFieldsRows(fieldsRows.filter((_, i) => i !== index));
  };


  /* ---------- Table handlers ---------- */
  const addTableRow = () => {
    setTableRows([...tableRows, { name: "", type: "" }]);
  };

  const deleteTableRow = (index) => {
    if (tableRows.length === 1) {
      alert("Can't delete, It's last row");
      return;
    }
    setTableRows(tableRows.filter((_, i) => i !== index));
  };


  return (
    <div className="full-panel">
      <h3>PDF Screen</h3>

      <div className="split-container">
        {/* -------- File Uploads -------- */}
        <div className="left-panel">
          <h4>Upload PDFs</h4>

          <input type="file" accept="application/pdf" />
          <br />
          <br />
          <input type="file" accept="application/pdf" />
        </div>

        <br />

        <div className="right-panel">
          {/* -------- Mode Dropdown -------- */}
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="">Select</option>
            <option value="fields">Fields</option>
            <option value="table">Table</option>
          </select>
          <br />
          <br />

          {/* ================= Fields Mode ================= */}
          {mode === "fields" && (
            <div>
              <h4>Fields</h4>

              {/* ===== HEADER ROW (ADD HERE) ===== */}
              <div className="header-row">
                <span>Field Name</span>
                <span>Type</span>
                <span>Field Name</span>
                <span>Type</span>
                <span>Action</span>
              </div>

              {fieldsRows.map((row, index) => (
                <div key={index} className="field-row">
                  <input
                    placeholder="Field 1"
                    value={row.f1}
                    onChange={(e) => {
                      const updated = [...fieldsRows];
                      updated[index].f1 = e.target.value;
                      setFieldsRows(updated);
                    }}
                  />
                  <select
                    value={row.t1}
                    onChange={(e) => {
                      const updated = [...fieldsRows];
                      updated[index].t1 = e.target.value;
                      setFieldsRows(updated);
                    }}
                  >
                    <option value="">Type</option>
                    <option value="text">Text</option>
                    <option value="int">Int</option>
                    <option value="decimal">Decimal</option>
                    <option value="date">Date</option>
                  </select>

                  <input
                    placeholder="Field 2"
                    value={row.f2}
                    onChange={(e) => {
                      const updated = [...fieldsRows];
                      updated[index].f2 = e.target.value;
                      setFieldsRows(updated);
                    }}
                  />
                  <select
                    value={row.t2}
                    onChange={(e) => {
                      const updated = [...fieldsRows];
                      updated[index].t2 = e.target.value;
                      setFieldsRows(updated);
                    }}
                  >
                    <option value="">Type</option>
                    <option value="text">Text</option>
                    <option value="int">Int</option>
                    <option value="decimal">Decimal</option>
                    <option value="date">Date</option>
                  </select>

                  <button
                    className="icon-btn delete"
                    onClick={() => deleteFieldRow(index)}
                  >
                    🗑
                  </button>
                </div>
              ))}

              <button className="icon-btn add" onClick={addFieldRow}>
                ➕
              </button>

              <br />
              <br />

              {/* Blank dropdown at end */}
              <select>
                <option value=""> </option>
              </select>
            </div>
          )}

          {/* ================= Table Mode ================= */}
          {mode === "table" && (
            <div>
              <h4>Table</h4>

              {/* ===== HEADER ROW (ADD HERE) ===== */}
              <div className="header-row table">
                <span>Column Name</span>
                <span>Type</span>
                <span>Action</span>
              </div>

              {tableRows.map((row, index) => (
                <div
                  key={index}
                  className="table-row"
                >
                  <input
                    placeholder="Column Name"
                    value={row.name}
                    onChange={(e) => {
                      const updated = [...tableRows];
                      updated[index].name = e.target.value;
                      setTableRows(updated);
                    }}
                  />
                  <select
                    value={row.type}
                    onChange={(e) => {
                      const updated = [...tableRows];
                      updated[index].type = e.target.value;
                      setTableRows(updated);
                    }}
                  >
                    <option value="">Type</option>
                    <option value="text">Text</option>
                    <option value="int">Int</option>
                    <option value="decimal">Decimal</option>
                    <option value="date">Date</option>
                  </select>

                  <button
                    className="icon-btn delete"
                    onClick={() => deleteTableRow(index)}
                  >
                    🗑
                  </button>
                </div>
              ))}

              <button className="icon-btn add" onClick={addTableRow}>
                ➕
              </button>

              <br />
              <br />

              {/* Blank dropdown at end */}
              <select>
                <option value=""> </option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
