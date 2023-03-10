import { Container } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea";
import { TagsInput } from "../../components/TagsInput";
import { ButtonText } from "../../components/ButtonText";
import { RiArrowLeftSLine, RiUpload2Fill } from "react-icons/ri";

export function Dish() {
    const [isToEdit, setIsToEdit] = useState("")

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsToEdit(true)
        } else {
            setIsToEdit(false)
        }
    })

    return (
        <Container>
            <Header />
            <main>
                <Link to="/home">
                    <ButtonText id="buttonText" title="Voltar" icon={RiArrowLeftSLine} />
                </Link>
                {
                    isToEdit ?
                        < h1 > Editar Prato</h1> : < h1 > Novo Prato</h1>
                }

                <div id="boxOne">

                    <div id="inputFile">
                        <label htmlFor="file">Imagem do prato</label>
                        <label htmlFor="arquivo" id="labelFile"><RiUpload2Fill />selecione uma imagem</label>
                        <input type="file" name="arquivo" id="arquivo" placeholder="Selecione imagem" icon={RiUpload2Fill} />
                    </div>

                    <div id="inputName">
                        <label htmlFor="name">Nome</label>
                        <Input type="text" id="name" placeholder="Ex.: Salada Ceasar" />
                    </div>

                    <div id="inputCategory">
                        <label htmlFor="category">Categoria</label>
                        <div id="select">
                            <select name="input" id="inputSelect">
                                <option value="Refei????o">Refei????o</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div id="boxTwo">

                    <div id="inputTag">
                        <label htmlFor="addTag" id="label">Ingredientes</label>
                        <div id="inputBg">
                            <TagsInput
                                value="opa"
                            />

                            <TagsInput
                                isNew
                                placeholder="Adicionar"
                            />
                        </div>
                    </div>

                    <div id="inputPrice">
                        <label htmlFor="price">Pre??o</label>
                        <Input type="number" id="price" placeholder="R$ 00,00" />
                    </div>

                </div>

                <div id="boxThree">
                    <div id="inputTextArea">
                        <label htmlFor="description">Descri????o</label>
                        <TextArea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composi????o" />
                    </div>
                    {
                        isToEdit ?
                            <div id="buttons">
                                < Button id="buttonDelete" title="Excluir prato" />
                                < Button title="Salvar altera????es" />
                            </div>
                            :
                            < Button title="Salvar altera????es" />
                    }
                </div>
            </main>
            <Footer />
        </Container >
    )
}