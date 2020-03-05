import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Productform = () => {
    const product = {
        name: '',
        detail: '',
        price: '',
        stock: 0
    };

    const ProductSchema = Yup.object({
        name: Yup.string()
            .min(5, 'minimo 5')
            .max(10, 'maximo 10')
            .required('requerido')
    });

    return (
        <Formik
            initialValues={product}
            onSubmit={(values, { setSubmitting } ) => {
                setTimeout(() => {
                    setSubmitting(false);
                }, 1000)
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
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div>
                        <input
                            type="input"
                            name="name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange} />
                        { errors.name && touched.name ?
                        <p style={{ color: 'red'}}>{errors.name}</p>
                        : null}
                    </div>
                    <div>
                        <textarea
                            name="detail"
                            value={values.detail}
                            onChange={handleChange}>
                        </textarea>
                        { errors.detail && touched.detail ?
                        <p style={{ color: 'red'}}>Campo invalido</p>
                        : null}
                    </div>
                    <div>
                        <button disabled={isSubmitting} type="submit">Guardar</button>
                    </div>
                </form>
            )}
        </Formik>
    )
};

export default Productform;
