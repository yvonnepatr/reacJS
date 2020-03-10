import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Productform = ({ title, product, handleSubmit }) => {
    const ProductSchema = Yup.object({
        name: Yup.string()
            .min(6, 'minimo 5')
            .required('requerido'),
        detail: Yup.string()
            .min(15)
            .required(),
        price: Yup.number()
            .min(0)
            .required(),
        stock: Yup.number()
            .min(0)
            .required()
    });

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <Formik
                        initialValues={product}
                        onSubmit={(values, { setSubmitting } ) => {
                            values.stock = parseInt(values.stock, 10);
                            handleSubmit(values);
                        }}
                        validationSchema={ProductSchema}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            touched,
                            errors,
                            isValid,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="input"
                                            name="name"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Nombre (min. 6 caracteres)"
                                        />
                                        { errors.name && touched.name ?
                                        <p style={{ color: 'red'}}>{errors.name}</p>
                                        : null}
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            name="detail"
                                            value={values.detail}
                                            onChange={handleChange}
                                            placeholder="Detalle (min. 15 caracteres)"
                                        >
                                        </textarea>
                                        { errors.detail && touched.detail ?
                                        <p style={{ color: 'red'}}>Campo invalido</p>
                                        : null}
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="input"
                                            name="price"
                                            value={values.price}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Pecio: ej. 15.99"
                                        />
                                        { errors.price && touched.price ?
                                        <p style={{ color: 'red'}}>{errors.price}</p>
                                        : null}
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="input"
                                            name="stock"
                                            value={values.stock}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Stock: ej. 5"
                                        />
                                        { errors.stock && touched.stock ?
                                        <p style={{ color: 'red'}}>{errors.stock}</p>
                                        : null}
                                    </div>
                                </div>
                                <div className="field is-grouped is-grouped-centered">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="button is-dark"
                                        disabled={ !isValid}
                                    >{ title }</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
};

export default Productform;
