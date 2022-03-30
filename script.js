//memasukkan angka kedalam textarea
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

//fungsi hitung
function equal(){
    let hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

//fungsi menghapus seluruh textarea
function clean(){
    document.form.textarea.value = "";
}

//fungsi delete
function del(){
    let hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);
}