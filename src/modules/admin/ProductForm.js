import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Productform = ({ title, product, handleSubmit, back }) => {
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
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className={ errors.name && touched.name ? 'input is-danger' : 'input' }
                                            type="input"
                                            name="name"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Nombre (min. 6 caracteres)"
                                        />
                                        {
                                            errors.name && touched.name
                                            ? <p className="help is-danger">El nombre es requerido, debe contener al menos 6 caracteres</p>
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            className={ errors.detail && touched.detail ? 'textarea is-danger' : 'textarea' }
                                            name="detail"
                                            value={values.detail}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Detalle (min. 15 caracteres)"
                                        >
                                        </textarea>
                                        {
                                            errors.detail && touched.detail
                                            ? <p className="help is-danger">El detalle es requerido, debe contener al menos 15 caracteres</p>
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className={ errors.price && touched.price ? 'input is-danger' : 'input' }
                                            type="input"
                                            name="price"
                                            value={values.price}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Pecio: ej. 15.99"
                                        />
                                        {
                                            errors.price && touched.price
                                            ? <p className="help is-danger">El precio es requerido, debe ser númerico mayor a 1 y máximo 2 decimales.</p>
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className={ errors.stock && touched.stock ? 'input is-danger' : 'input' }
                                            type="input"
                                            name="stock"
                                            value={values.stock}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Stock: ej. 5"
                                        />
                                        {
                                            errors.stock && touched.stock
                                            ? <p className="help is-danger">El stock es requerido, debe ser númerico y mayor o igual a 0.</p>
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="field is-grouped is-grouped-centered">
                                    <button
                                        type="button"
                                        onClick={back}
                                        className="button"
                                        style={{ margin: '0 16px' }}
                                    >Regresar</button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="button is-dark"
                                        disabled={ !isValid || isSubmitting }
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
