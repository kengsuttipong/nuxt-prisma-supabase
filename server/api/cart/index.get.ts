export default defineEventHandler(event => {
    return {
        statusCode: 200,
        message: 'Test index get Handler'
    }
})