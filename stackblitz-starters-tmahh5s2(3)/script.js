
  function searchService() {
        const input = document.getElementById("searchInput");

            if (!input) return;

                const text = input.value.trim().toLowerCase();

                    if (text === "") {
                            alert("Iltimos, xizmat nomini yozing.");
                                    return;
                                        }

                                            if (text.includes("shifokor") || text.includes("doktor")) {
                                                    window.location.href = "doctor.html";
                                                        }
                                                            else if (text.includes("advokat")) {
                                                                    window.location.href = "lawyer.html";
                                                                        }
                                                                            else if (
                                                                                    text.includes("davlat") ||
                                                                                            text.includes("pasport") ||
                                                                                                    text.includes("zags")
                                                                                                        ) {
                                                                                                                window.location.href = "state.html";
                                                                                                                    }
                                                                                                                        else if (
                                                                                                                                text.includes("uy") ||
                                                                                                                                        text.includes("uy-joy") ||
                                                                                                                                                text.includes("kvartira")
                                                                                                                                                    ) {
                                                                                                                                                            window.location.href = "housing.html";
                                                                                                                                                                }
                                                                                                                                                                    else if (
                                                                                                                                                                            text.includes("avto") ||
                                                                                                                                                                                    text.includes("mashina") ||
                                                                                                                                                                                            text.includes("avtomobil")
                                                                                                                                                                                                ) {
                                                                                                                                                                                                        window.location.href = "car.html";
                                                                                                                                                                                                            }
                                                                                                                                                                                                                else if (
                                                                                                                                                                                                                        text.includes("to'lov") ||
                                                                                                                                                                                                                                text.includes("tolov") ||
                                                                                                                                                                                                                                        text.includes("elektr") ||
                                                                                                                                                                                                                                                text.includes("gaz") ||
                                                                                                                                                                                                                                                        text.includes("suv")
                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                    window.location.href = "payments.html";
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                                                                    alert(
                                                                                                                                                                                                                                                                                                "Kechirasiz, bu xizmat hozircha topilmadi."
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                            }
  }
  // ===== HIZMATLAR PLATFORMASI =====

  function saveUser(name, phone) {
    localStorage.setItem("hizmatlarName", name);
      localStorage.setItem("hizmatlarUser", phone);
        localStorage.setItem("hizmatlarLoggedIn", "true");
        }

        function getCurrentUser() {
          return {
              name: localStorage.getItem("hizmatlarName") || "",
                  phone: localStorage.getItem("hizmatlarUser") || "",
                      loggedIn:
                            localStorage.getItem("hizmatlarLoggedIn") === "true"
                              };
                              }

                              function logoutUser() {
                                localStorage.removeItem("hizmatlarLoggedIn");
                                  window.location.href = "index.html";
                                  }

                                  function isLoggedIn() {
                                    return localStorage.getItem("hizmatlarLoggedIn") === "true";
                                    }


                                    // ===== NAVBATLAR =====

                                    function saveAppointment(doctor, date, time) {

                                      const appointments =
                                          JSON.parse(
                                                localStorage.getItem("appointments") || "[]"
                                                    );

                                                      appointments.push({
                                                          id: Date.now(),
                                                              doctor: doctor,
                                                                  date: date,
                                                                      time: time,
                                                                          user:
                                                                                localStorage.getItem("hizmatlarUser") || "",
                                                                                    status: "Kutilmoqda"
                                                                                      });

                                                                                        localStorage.setItem(
                                                                                            "appointments",
                                                                                                JSON.stringify(appointments)
                                                                                                  );

                                                                                                    alert(
                                                                                                        "✅ Navbatingiz saqlandi!\n\n" +
                                                                                                            doctor + "\n" +
                                                                                                                date + " — " + time
                                                                                                                  );
                                                                                                                  }

                                                                                                                  function getAppointments() {

                                                                                                                    return JSON.parse(
                                                                                                                        localStorage.getItem("appointments") || "[]"
                                                                                                                          );

                                                                                                                          }
      // ===== UY-JOY E'LONLARI =====

      function saveHouse(title, price, location) {

        const houses =
            JSON.parse(
                  localStorage.getItem("houses") || "[]"
                      );

                        houses.push({
                            id: Date.now(),
                                title: title,
                                    price: price,
                                        location: location,
                                            user:
                                                  localStorage.getItem("hizmatlarUser") || "",
                                                      status: "Tekshirilmoqda"
                                                        });

                                                          localStorage.setItem(
                                                              "houses",
                                                                  JSON.stringify(houses)
                                                                    );

                                                                      alert(
                                                                          "✅ Uy-joy e'loni saqlandi!"
                                                                            );
                                                                            }

                                                                            function getHouses() {

                                                                              return JSON.parse(
                                                                                  localStorage.getItem("houses") || "[]"
                                                                                    );

                                                                                    }


                                                                                    // ===== AVTOMOBIL E'LONLARI =====

                                                                                    function saveCar(name, price, location) {

                                                                                      const cars =
                                                                                          JSON.parse(
                                                                                                localStorage.getItem("cars") || "[]"
                                                                                                    );

                                                                                                      cars.push({
                                                                                                          id: Date.now(),
                                                                                                              name: name,
                                                                                                                  price: price,
                                                                                                                      location: location,
                                                                                                                          user:
                                                                                                                                localStorage.getItem("hizmatlarUser") || "",
                                                                                                                                    status: "Tekshirilmoqda"
                                                                                                                                      });

                                                                                                                                        localStorage.setItem(
                                                                                                                                            "cars",
                                                                                                                                                JSON.stringify(cars)
                                                                                                                                                  );

                                                                                                                                                    alert(
                                                                                                                                                        "✅ Avtomobil e'loni saqlandi!"
                                                                                                                                                          );
                                                                                                                                                          }

                                                                                                                                                          function getCars() {

                                                                                                                                                            return JSON.parse(
                                                                                                                                                                localStorage.getItem("cars") || "[]"
                                                                                                                                                                  );

                                                                                                                                                                  }
     // ===== TO‘LOVLAR =====

     function savePayment(service, amount) {

       const payments =
           JSON.parse(
                 localStorage.getItem("payments") || "[]"
                     );

                       payments.push({
                           id: Date.now(),
                               service: service,
                                   amount: amount,
                                       user:
                                             localStorage.getItem("hizmatlarUser") || "",
                                                 status: "Kutilmoqda",
                                                     date: new Date().toLocaleString("uz-UZ")
                                                       });

                                                         localStorage.setItem(
                                                             "payments",
                                                                 JSON.stringify(payments)
                                                                   );

                                                                     alert(
                                                                         "✅ To‘lov ma'lumoti saqlandi."
                                                                           );
                                                                           }

                                                                           function getPayments() {

                                                                             return JSON.parse(
                                                                                 localStorage.getItem("payments") || "[]"
                                                                                   );

                                                                                   }


                                                                                   // ===== PROFIL =====

                                                                                   function loadUserProfile() {

                                                                                     const user = getCurrentUser();

                                                                                       const nameElement =
                                                                                           document.getElementById("profileName");

                                                                                             const phoneElement =
                                                                                                 document.getElementById("profilePhone");

                                                                                                   if (nameElement) {
                                                                                                       nameElement.textContent =
                                                                                                             user.name || "Foydalanuvchi";
                                                                                                               }

                                                                                                                 if (phoneElement) {
                                                                                                                     phoneElement.textContent =
                                                                                                                           user.phone || "Telefon raqam yo‘q";
                                                                                                                             }

                                                                                                                             }


                                                                                                                             // ===== SAHIFA YUKLANGANDA =====

                                                                                                                             document.addEventListener(
                                                                                                                               "DOMContentLoaded",
                                                                                                                                 function() {

                                                                                                                                     loadUserProfile();

                                                                                                                                       }
                                                                                                                                       );                                                                                                                                                                                                                                                                       