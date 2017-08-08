
class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        console.log(xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send();

        });
    }
}