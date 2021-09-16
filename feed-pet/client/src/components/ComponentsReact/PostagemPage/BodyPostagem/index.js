import React from "react";
import { api } from "../../../../service";
import { ModalPostagem } from "../Modal";
import { Postagem } from "../Post";
import "./styles.css"

export class CorpoPaginaPostagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postagem:[]
        };
    }

    
    async componentDidMount(){
        try {
            const res = await api.get("/postagens");
            const postagens = res.data;
            console.log(postagens)
            this.setState({postagem:postagens})
        } catch (error) {
            console.log(error)
        }
    }

    addPostagem = postagens => {
        this.setState({
            postagem: [
                postagens,
                ...this.state.postagem                
            ]
        });
    }

    render(){
        return(
            <>
            <ModalPostagem setarPost={this.addPostagem}/>
            <div className="bodyPost">
                <Postagem postagens={this.state.postagem} className="corpoPostagem"/>
            </div>
            </>
        )
    };
}