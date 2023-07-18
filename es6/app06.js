var names = {
        cities: ['Blr','Del','Mum','Pune'],
        print: function(delay=1000) {
            console.log(this.cities.join(','))
          setTimeout(()=> {
            console.log(this.cities.join(','))
          }, delay)
  
        }
      }
  
names.print()