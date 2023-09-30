const body = document.querySelector('body');
                var nameIn = document.getElementById("name")
                var emailIn = document.getElementById("email")
                var websiteIn = document.getElementById("website")
                var messageIn = document.getElementById("message")
                nameIn.addEventListener("blur",function(){
                  if (nameIn.value === ""){
                    nameIn.style.borderColor = "red"
                    document.getElementById("nameAlert").innerHTML = "This field is required"
                  }
                  else {
                    nameIn.style.borderColor = "black"
                    document.getElementById("nameAlert").innerHTML = "";
                  }
                })

                emailIn.addEventListener("blur",function(){
                  if (emailIn.value === ""){
                    emailIn.style.borderColor = "red"
                    document.getElementById("emailAlert").innerHTML = "A valid email is required"
                  }
                  else {
                    emailIn.style.borderColor = "black"
                    document.getElementById("emailAlert").innerHTML = "";
                  }
                })

                websiteIn.addEventListener("blur",function(){
                  if (websiteIn.value === ""){
                    websiteIn.style.borderColor = "red"
                    document.getElementById("websiteAlert").innerHTML = "A valid URL is required"
                  }
                  else {
                    websiteIn.style.borderColor = "black"
                    document.getElementById("nameAlert").innerHTML = "";
                  }
                })

                messageIn.addEventListener("blur",function(){
                  if (messageIn.value === ""){
                    messageIn.style.borderColor = "red"
                    document.getElementById("messageAlert").innerHTML = "This field is required"
                  }
                  else {
                    messageIn.style.borderColor = "black"
                    document.getElementById("messageAlert").innerHTML = "";
                  }
                })