import React, {Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import API from "../utils/API";

class Directory extends Component {
    state = {
        search: "",
        results: [{}],
        original: [{}],
        count: 10,
        error: ""
    };

    componentDidMount() {
        API.getMultipleEmp(this.state.count)
        .then(res => {
            this.setState({
                results: res.data.results, 
                original: res.data.results,
                search: ""
            });
        })
        //.then(console.log(this.state.results + this.state.search))
        .catch(err => console.log(err));
    };

    sortByFirstName = () => {
        let modified = true;
        let arrayCopy = this.state.results;
        while(modified)
        {
            modified = false;
            for(let index = 0; index < arrayCopy.length - 1; index++)
            {
                let firstPerson = arrayCopy[index].name.first.toLowerCase().split('');
                let secondPerson = arrayCopy[index + 1].name.first.toLowerCase().split('');
                
                if(firstPerson[0] > secondPerson[0]) {
                    let temp = arrayCopy[index];
                    arrayCopy[index] = arrayCopy[index + 1];
                    arrayCopy[index + 1] = temp;
                    modified = true; 
                } else if (firstPerson[0] === secondPerson[0]) {
                    let i = 1;
                    while(firstPerson[i] === secondPerson[i]) {
                        i = i + 1;
                    }
                    if(firstPerson[i] > secondPerson[i]) {
                        let temp = arrayCopy[index];
                        arrayCopy[index] = arrayCopy[index + 1];
                        arrayCopy[index + 1] = temp;
                        modified = true;
                    };
                };
            };
        };
        console.log(arrayCopy);
        this.setState({results: arrayCopy});
    };

    filterEmployees = (years) => {
        let arrayCopy = this.state.results.filter(employee => employee.registered.age > years);
        this.setState({results: arrayCopy});
    }

    originalEmp = () => {
        this.setState({results: this.state.original});
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="mx-auto" size="md-10">
                            <br/>
                            <br/>
                                {this.state.results.length > 1? (
                                this.state.results.map(result => (
                                    <Card employee={result}></Card>
                                )))
                                :""};
                        </Col>
                        <Col size="md-2">
                            <br/>
                            <br/>
                            <button className="btn btn-primary m-1" onClick={this.sortByFirstName}>Sort By First Name</button>
                            <br/>
                            <button className="btn btn-primary m-1" onClick={() => this.filterEmployees(10)}>Filter By Tenure (10 Years)</button>
                            <br/>
                            <button className="btn btn-primary m-1" onClick={this.originalEmp}>Clear Filter</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Directory;

// {this.state.results.map(result => (
//                              <Card /*key={result.id}*/ first={result.}></Card>
//                             ))}
//<Card /*key={result.id}*/ results={this.state.results}></Card>

//<Card /*key={result.id}*/ employee={this.state.results}></Card>