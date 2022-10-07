
export async function getAllBooks() {

    const response = await fetch('http://localhost:3080/api/books');
    return await response.json();
}

export async function createBook(data) {
    const response = await fetch('http://localhost:3080/api/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({book: data})
      })
    return await response.json();
}