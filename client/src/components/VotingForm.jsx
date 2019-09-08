import {Card, Radio, Spin} from "antd";
import React, { Fragment } from "react";



const VotingForm = ({ options, chosenOption, onChange, loading }) => loading ? (<Spin />) : (
    <Card title="Et nyt kajakskur?" className="voting-form">
        <Radio.Group onChange={onChange} value={chosenOption}>
            {options.map(({ id, name })=> <Radio key={id} value={id} >{name}</Radio>)}
        </Radio.Group>
    </Card>
);

export default VotingForm;