import React from 'react';

function Table(props) {
    return (
        <React.Fragment>
        
            
            <tbody>
                <tr>
                    <th scope="row">{props.id}</th>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.category}</td>
                </tr>

            </tbody>
        
        </React.Fragment>
    );
}

export default Table;