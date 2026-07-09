document.getElementById("nome").textContent =
    localStorage.getItem("nome") || "Visitante";

document.getElementById("nickname").textContent =
    localStorage.getItem("nickname") || "@usuario";

document.getElementById("frase").value =
    localStorage.getItem("frase") || "";

document.getElementById("livro").value =
    localStorage.getItem("livro") || "";

document.getElementById("fraseSalva").textContent =
    localStorage.getItem("frase") || "Nenhuma frase cadastrada.";

document.getElementById("livroSalvo").textContent =
    localStorage.getItem("livro") || "Nenhum livro informado.";


function salvarPerfil() {

    let frase = document.getElementById("frase").value;

    let livro = document.getElementById("livro").value;

    localStorage.setItem("frase", frase);

    localStorage.setItem("livro", livro);

    document.getElementById("fraseSalva").textContent = frase;

    document.getElementById("livroSalvo").textContent = livro;

    alert("Perfil salvo!");
}


let livros = JSON.parse(localStorage.getItem("livros")) || [];

mostrarLivros();


function cadastrarLivro() {

    let nome = document.getElementById("nomeLivro").value;

    let autor = document.getElementById("autor").value;

    let formato = document.getElementById("formato").value;

    let paginas = document.getElementById("paginas").value;

    let avaliacao = document.getElementById("avaliacao").value;

    if (
        nome == "" ||
        autor == "" ||
        formato == "" ||
        paginas == "" ||
        avaliacao == ""
    ) {

        alert("Preencha todos os campos!");

        return;
    }

    livros.push({

        nome,

        autor,

        formato,

        paginas,

        avaliacao

    });

    localStorage.setItem("livros", JSON.stringify(livros));

    document.getElementById("nomeLivro").value = "";

    document.getElementById("autor").value = "";

    document.getElementById("formato").value = "";

    document.getElementById("paginas").value = "";

    document.getElementById("avaliacao").value = "";

    mostrarLivros();

}



function mostrarLivros() {

    let lista = document.getElementById("listaLivros");

    let pesquisa = document.getElementById("pesquisa").value.toLowerCase();

    lista.innerHTML = "";

    livros.forEach(function (livro) {

        if (livro.nome.toLowerCase().includes(pesquisa)) {

            lista.innerHTML += `

            <div class="livro">

                <h3>${livro.nome}</h3>

                <p><strong>Autor:</strong> ${livro.autor}</p>

                <p><strong>Formato:</strong> ${livro.formato}</p>

                <p><strong>Páginas:</strong> ${livro.paginas}</p>

                <p><strong>Avaliação:</strong> ${"⭐".repeat(Number(livro.avaliacao))}</p>

            </div>

            `;
        }

    });

}
