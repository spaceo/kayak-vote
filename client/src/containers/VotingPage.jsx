import React, { Component, Fragment } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import {Card, Radio, Spin} from 'antd';
import GetAllOptions from "../graphql/queries/GetVotingOptions";
import {flowRight} from "lodash";
import VotingForm from "../components/VotingForm";


class VotingContainer extends Component {
    state = {
        chosenOption: null,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            chosenOption: e.target.value,
        });
    };

    render() {
        const { loading, options } = this.props.data;
        const { chosenOption } = this.state;

        return(
            <div className="voting-page">
                <VotingForm onChange={this.onChange} chosenOption={chosenOption} options={options} loading={loading} />
            </div>

        );
    }
}


export default flowRight(
    graphql(GetAllOptions)
)(withApollo(VotingContainer));
// {!loading && (<VotingForm onChange={this.onChange} chosenOption={chosenOption} options={options} />)}
