import React from "react";

class MyDataRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: {}
    };
  }

  render() {
    let { row, columnNames } = this.props;
    return (
      <tr>
        {Object.keys(columnNames).map(key => (
          <td>{row[key]}</td>
        ))}
      </tr>
    );
  }
}

export default MyDataRow;
