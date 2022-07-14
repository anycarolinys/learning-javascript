var listaConvidados = [
    {
        convidante: 'Any',
        convidados: ['Alessandra', 'Carla', 'Luiza']
    },

    {
        convidante: 'Beatriz',
        convidados: ['Larissa', 'Marcele', 'João']
    },

    {
        convidante: 'Ana',
        convidados: ['Marcia', 'Lohana', 'Danuzia']
    },

    {
        convidante: 'Leticia',
        convidados: ['Ofélia', 'Eduarda', 'Geovana']
    }
];

function conferirConvite(nomeConvidante, nomeConvidado) {
    for (const pessoa of listaConvidados) {
        if (nomeConvidante === pessoa.convidante) {
            for (const convidado of pessoa.convidados) {
                if(nomeConvidado === convidado)
                return true;
            }
        }
    }
    return false;
}

function verificarEntrada() {
    let nomeConvidado = document.getElementById('nomeConvidado').value;
    let nomeConvidante = document.getElementById('nomeConvidante').value;
    if (conferirConvite(nomeConvidante, nomeConvidado))
        document.getElementById('PermissaoEntrada').innerText = 'ENTRADA LIBERADA!';
    else    
        document.getElementById('PermissaoEntrada').innerText = 'ENTRADA NEGADA!';
}

