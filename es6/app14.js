class Article {
    constructor(title, date) {
      this.title = title
      this.date = date
    }  
    
    static compare(obj1,obj2){
        console.log(obj1.date,obj2.date)
        if (obj1.date < obj2.date) {
            return -1
          } else if (obj1.date > obj2.date) {           
            return +1
          } else {
            return 0
        }
    }
  }

  const  articles = [
    new Article("HTML", new Date(2020, 1, 1)),
    new Article("CSS", new Date(2020, 0, 1)),
    new Article("JavaScript", new Date(2020, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  console.log( "article: " , articles[0].title );