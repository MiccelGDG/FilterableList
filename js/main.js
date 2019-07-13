const welcome =  () => {
    alert("Benvenuto!");
}

const filterName = () =>
{
    
    //Ottengo il valore dell'Input Field
    let filterNameValue = document.getElementById("filterInput").value.toLowerCase();
    
    //Ottengo i nomi(convertendo il )
    
    let li = Array.from(document.querySelectorAll("li.collection-item"));
    
    console.log(li);
    
    li.map(name => { 
        let a = name.getElementsByTagName("a")[0];
        if(a.innerHTML.toLowerCase().indexOf(filterNameValue) > - 1)
        {
            name.style.display = '';        
        }
        else
        {
            name.style.display = 'none';
        }
    })
}

window.onload = () =>
{
    setTimeout(welcome, 1000);
    
    let filterInput = document.getElementById("filterInput");
    
    filterInput.addEventListener("keyup", filterName);
    
   
}