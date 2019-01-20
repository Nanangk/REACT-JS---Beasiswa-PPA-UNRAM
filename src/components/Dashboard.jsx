import React, { Component } from 'react';
import SimpleCard from "./Card";
import CardVerif from "./CardVerif";
class Dashboard extends Component {
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>
                            
                            <SimpleCard></SimpleCard>
                        </td>
                        <td></td>
                        <td>
                            <t></t>
                        </td>
                        <td></td>
                        <td>
                            <CardVerif></CardVerif>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dashboard;