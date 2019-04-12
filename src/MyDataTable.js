import React from "react";
import MyDataRow from "./MyDataRow.js";

class MyDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      columnNames: props.columnNames,
      url: props.url
    };
  }

  componentDidMount() {
    console.log(this.state.url);
    fetch(this.state.url)
      .then(function(response) {
        //console.log(response.json());
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        this.setState({
          ...this.state,
          data: data.data,
          columnNames: data.columnNames
        });
        console.log(JSON.stringify(this.state, null, 2));
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }

  render() {
    //let { data, columnNames } = this.props;

    return (
      <table>
        <tr>
          {Object.values(this.state.columnNames).map(name => (
            <th>{name}</th>
          ))}
        </tr>
        {this.state.data.map(row => (
          <MyDataRow row={row} columnNames={this.state.columnNames} />
        ))}
      </table>
    );
  }
}

export default MyDataTable;
