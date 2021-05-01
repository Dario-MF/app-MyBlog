import * as yup from 'yup';


const FILE_SIZE = "500000";
const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];


export const schemaPost = yup.object().shape({
    title: yup.string()
        .required('Titulo es requerido.')
        .min(2, 'Minimo 2 caracteres')
        .max(50, 'Maximo 50 caracteres'),
    subtitle: yup.string()
        .required('Subtitulo es requerido.')
        .min(2, 'Minimo 2 caracteres')
        .max(150, 'Maximo 150 caracteres'),
    image: yup
        .mixed()
        .nullable()
        .test("FILE_SIZE", "Imagen es requerida", (value) => {
            return !value || value.length > 0;
        })
        .test("FILE_SIZE", "Imagen demasiado grande.", (value) => {
            return (
                !value || (value && value.length > 0 && value[0].size <= FILE_SIZE)
            );
        })
        .test(
            "FILE_FORMAT", "Formato no soportado (jpeg, png)",
            (value) =>
                !value ||
                (value &&
                    value.length > 0 &&
                    SUPPORTED_FORMATS.includes(value[0].type))
        ),
});

export const schemaPostUpdate = yup.object().shape({
    title: yup.string()
        .required('Titulo es requerido.')
        .min(2, 'Minimo 2 caracteres')
        .max(50, 'Maximo 50 caracteres'),
    subtitle: yup.string()
        .required('Subtitulo es requerido.')
        .min(2, 'Minimo 2 caracteres')
        .max(150, 'Maximo 150 caracteres'),
    image: yup
        .mixed()
        .test("FILE_SIZE", "Imagen demasiado grande.", (value) => {
            if (!value || !value.length) return true
            return value[0].size <= FILE_SIZE

        })
        .test("FILE_FORMAT", "Formato no soportado (jpeg, png)", (value) => {
            if (!value || !value.length) return true
            return SUPPORTED_FORMATS.includes(value[0].type)
        }),
});