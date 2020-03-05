import React from 'react';
import {Formik} from 'formik';

const ProductForm=()=>{

    const producto ={
        name:'',
        detail:'',
        price:'',
        stock:0
    };
    return(
        <Formik initialValues={producto} 
            onSubmit={(values)=>{
            console.log(values)
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit
            })=>(
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input type="text" name="name"
                    value={values.name}
                     onChange={handleChange} 
                     placeholder="Ingresar el nombre" />

                    <button type="submit">Guardar</button>
                </form>
                            
            )};
        </Formik>

    )
}

export default ProductForm;

/*
class ProductForm extends Component {
state = {
    name:'',
    detail:''
}
handleChange = (e)=>{
    const {value,name} = e.target;
    this.setState({[name]:value});
}

handleSubmit= (e)=>{
    e.preventDefault();
    console.log(this.state);
}
    render(){
        const{name,detail} = this.state;
     return(

        <form onSubmit={this.handleSubmit} autoComplete="off"> 
        <div>
            <input name="name" type="input" value={name} onChange={this.handleChange} placeholder="Ingresar el Nombre"/>
        {
            name.length<5?
            <p style={{color: 'red'}}>El campo es requerido</p>
            : null
        }
        </div>
        <div>
            <textarea name="detail" type="input" value={detail} onChange={this.handleChange} 
            placeholder="Ingresar el detalle"></textarea>
        </div>
        <div>
            <button disabled={name.length<=0 || detail.length<=0}>Guardar </button>
        </div>
    </form>
     )  
        
    }
}

export default ProductForm;*/