import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import "./Score.css";

class Score extends Component {
    
    render() {
        return (
            
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={2}></Col>
                    <Col xs={10} md={8}>
                        <code>
                            <Row className="scoreLine">
                                <Col xs={0} md={2}></Col>
                                <Col xs={6} md={4}><div className="score">Current Score: {this.props.score}</div></Col>
                                <Col xs={6} md={4}><div className="score">Your High Score: {this.props.highScore}</div></Col>
                                <Col xs={0} md={2}></Col>
                            </Row>
                        </code>
                    </Col>
                    <Col xs={1} md={2}></Col>
                </Row>
            </Grid>
        );    
    }; 
}; 

export default Score;