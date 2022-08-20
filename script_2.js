document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');

    content.appendChild(BuildForm.create_form());
    content.appendChild(BuildForm.login_textbox());
    content.appendChild(BuildForm.password_textbox());
    content.appendChild(BuildForm.submit_btn());
    
})

let BuildForm = {

    'create_form': function (action, method = "GET") {
        return HTMLDefaultTags.form("method", "action");
    },

    'login_textbox': function () {
        return HTMLDefaultTags.input("login", "text");
        
    },
    'submit_btn': function () {
        return HTMLDefaultTags.button("Отправить", "submit");
    },
    'password_textbox': function () {
        return HTMLDefaultTags.input("password", "password");
    }
}

let HTMLDefaultTags = {
    'form': function (method = "GET", action) {
        let form = document.createElement('form');
        form.method = method;
        form.action = action;
        return form;
    },
    'button': function (title, type = "submit") {
        let btn = document.createElement('button');
        btn.innerText = title;
        btn.type = type;
        return btn;
    },
    'input': function (name, type = "") {
        let input = document.createElement('input');
        input.name = name;
        input.type = type;
        return input;
    }
}