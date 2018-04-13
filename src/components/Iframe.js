import React from 'react'
import PropTypes from 'prop-types';

export default class Iframe extends React.Component {
    constructor()
    {
        super();
        this.state = {
            input:'',
            output: ''
        }
    }

    onClick(e)
    {
       e.preventDefault();
       this.eval(this.state.input);
       console.log(this.getResult())
    }

    onChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount()
    {
        let iframe = this.iframe;
        this.iDoc = iframe.contentWindow || iframe.contentDocument;

        let scripts = {
            eval: (data)=> {
                this.iDoc.result = eval(data)
            },
            getResult: () => this.iDoc.result,
        };

        this.iDoc.scripts = scripts;
    }

    eval(data)
    {
        return this.iDoc.scripts.eval(data);
    }

    getResult()
    {
       return this.iDoc.scripts.getResult();
    }

    render() {
        return <div>
                    <textarea name="input"
                              onChange={this.onChange.bind(this)}
                              value={this.state.input}
                              cols="30"
                              rows="10"/>
                    <iframe ref={(el)=>this.iframe = el}/>
                    <input type="button" onClick={this.onClick.bind(this)}/>
              </div>

    }
}

Iframe.propTypes = {

};


// executeCode()
// {
//     let data = {
//         initialRibsTable: initialRibsTable,
//         compressedResult: compressedResult,
//         resultData: resultData,
//     };
//
//     this.ifr.contentWindow.postMessage(data, "*");
//
//     this.ifr.contentWindow.document.body.innerHTML = "<script type='text/javascript'>"
//         + eval(this.props.currentCodeTask1) +
// //         "</script>";
// }