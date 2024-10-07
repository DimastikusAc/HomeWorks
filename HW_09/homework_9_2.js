function groupByMassanger(arr) {
    let groupByMass;
    
        groupByMass = Object.groupBy(arr, (item) => {
        return item.source;
        }); 

    return groupByMass;
    };


let arr = [
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

// let  groupByMass = Object.groupBy(arr, (item) => {
//     return item.source;
    
// });

console.log('groupByMassanger:', groupByMassanger(arr));