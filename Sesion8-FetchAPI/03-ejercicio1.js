async function obtenerPost() {
    try {
        const post  = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!post.ok){
            throw new Error(`Error HTTP: ${post.status}`);
        }

        const respuesta = await post.json();

        const postFiltrado = respuesta
            .filter((p) => p.userId === 1);
        
        console.log(postFiltrado.length);
        
        postFiltrado.forEach(p => {
            console.log(`Titulo: ${p.title}`);
        });
    } catch (error){
        console.log("Error: ", error.message);
    }
}

obtenerPost();