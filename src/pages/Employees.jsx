import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        width="auto"
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
