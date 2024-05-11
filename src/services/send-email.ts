export async function sendData<T>(url: string, payload: string): Promise<T> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: payload,
        });

        if (!response.ok) {
            throw new Error('Произошла ошибка при отправке данных. Статус: ' + response.status);
        }

        return await response.json() as T;
    } catch (error) {
        throw new Error('Произошла ошибка при отправке данных: ' + error);
    }
}