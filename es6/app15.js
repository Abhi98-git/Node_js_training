
       const {called} = new class {
            count = 0;
            called = () => {
                this.count++;
                console.log(`Called : ${this.count}`);
            }
        };
        called(); 
        called(); 
        called(); 
        
        

        
               const obj = new class {
            count = 0;
            called = () => {
                this.count++;
                console.log(`Called : ${this.count}`);
            }
        };
            
            
            obj.called(); 
             obj.called(); 
            obj.called(); 