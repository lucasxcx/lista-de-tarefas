$(document).ready(function() {
    $('#acao').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();

        if (tarefa.trim() !== '') {
            const novoItem = $('<li></li>');
            const checkbox = $('<input type="checkbox" class="marcar">');
            novoItem.append(checkbox).append(' ' + tarefa);
            $('#lista-tarefas').append(novoItem);
            $('#tarefa').val('');
        }
    });

    $(document).on('change', 'input.marcar', function() {
        const checkboxes = document.querySelectorAll('input.marcar');
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkbox.parentNode.style.textDecoration = 'line-through';
            } else {
                checkbox.parentNode.style.textDecoration = 'none';
            }
        })
    });
});