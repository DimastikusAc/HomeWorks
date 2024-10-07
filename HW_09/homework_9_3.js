function objectGroupBy(array, cb) {
    let result = {};
    
    for (let i = 0; i < array.length; i++) {
        let key = cb(array[i], i, array);
        
        if (!(key in result)) {
            result[key] = [];
              
           
        };   
        
        result[key].push(array[i]);            
        
            
    }
    return result;
};


let arr =[
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "Viber", text: "У вас пропущене повідомлення", date: "23-09-2024"},
    {source: "telegram", text: "Не прочитане повідомлення ", date: "23-09-2024"},
    {source: "Viber", text: "У вас пропущене повідомлення", date: "23-09-2024"},
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "Viber", text: "У вас пропущене повідомлення", date: "23-09-2024"},
    {source: "telegram", text: "Не прочитане повідомлення ", date: "23-09-2024"},
    {source: "WhatsApp", text: "У вас пропущене повідомлення", date: "23-09-2024"},
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "telegram", text: "Не прочитане повідомлення ", date: "23-09-2024"},
    {source: "WhatsApp", text: "У вас пропущене повідомлення", date: "23-09-2024"},
    {source: "Viber", text: "У вас пропущене повідомлення", date: "23-09-2024"}
  ];

  let groupBy = objectGroupBy(arr, (item, index, array)  => {
    return item.source;
});

console.log('groupBy:', groupBy);