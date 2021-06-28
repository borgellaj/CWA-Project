import React, { Component } from 'react'
import { Provider } from 'react-redux';


import store from '../components/etc/store';
import Card from '../components/etc/form'
import Layout from '../components/layout';



const Application = (location) => {
        // console.log(this.props.location)

        return (
            <Layout location={location}>
                <div className="application-top">
                    <div className="div1">
                        <h2>COMMUNICATIONS WORKERS OF AMERICA
                            JOINT APPRENTICESHIP TRAINING COMMITTEE
                            (CWA-JATC)
                        </h2>
                    </div>
                    <div className="div2">
                        <h2>APPLICATION FOR APPRENTICESHIP</h2>
                    </div>
                </div>
                <Provider store={store}>
                    <Card />
                </Provider>
            </Layout>
        )
    
}
export default  Application