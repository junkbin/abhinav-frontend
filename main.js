async function makeServerCall() {
  let inputid = document.querySelector("#id1").value || 1;
  let url = `https://jsonplaceholder.typicode.com/users/${inputid}`;
  let response = await fetch(url);
  let result = await response.json();
  console.log(result);

  // After the result :: DOM MANIPULATION
  let parent = document.querySelector("#parent");

  let assetId = result.id;
  let location = result.address.city;
  let geo = ` ${result.address.geo.lat}/${result.address.geo.lng}`;
  let desc = `${result.name} / <u>${result.website}</u>.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui rem aut fugiat reiciendis in, eum, tempore
                    distinctio sed aperiam ut enim fuga corporis animi perspiciatis mollitia nihil ratione repudiandae!
              `;
  let createdBy = `${result.name}`;

  let newAsset = `
                <hr />
                <div>
                    <h2>Asset ${assetId}</h2>
                    <h3>Location : ${location}</h3>
                    <h4>GEO ${geo}</h4>
                    <p>${desc}</p>
                    <h5>Created By: ${createdBy}</h5>
                </div>
            `;

  parent.innerHTML = newAsset + parent.innerHTML;
}

async function makeServerCall2() {
  let url = "https://jsonplaceholder.typicode.com/users/1";
  let response = await fetch(url);
  let result = await response.json();
  console.log(result);

  // After the result :: DOM MANIPULATION
  let parent = document.querySelector("#parent");

  let assetId = result.id;
  let location = result.address.city;
  let geo = ` ${result.address.geo.lat}/${result.address.geo.lng}`;
  let desc = `${result.name} / <u>${result.website}</u>.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui rem aut fugiat reiciendis in, eum, tempore
                  distinctio sed aperiam ut enim fuga corporis animi perspiciatis mollitia nihil ratione repudiandae!
            `;
  let createdBy = `${result.name}`;

  let newAsset = `
              <hr />
              <div>
                  <h2>Asset ${assetId}</h2>
                  <h3>Location : ${location}</h3>
                  <h4>GEO ${geo}</h4>
                  <p>${desc}</p>
                  <h5>Created By: ${createdBy}</h5>
              </div>
          `;

  parent.innerHTML = parent.innerHTML + newAsset;
}

// FOR LERANING
async function makeServerCall1() {
  let url = "https://jsonplaceholder.typicode.com/users/1";
  let response = await fetch(url);
  let result = await response.json();

  console.log(result);
}

function addNewAssets() {
  let parent = document.querySelector("#parent");

  let assetId = 1;
  let location = "Bhopal";
  let geo = " 78/76";
  let desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui rem aut fugiat reiciendis in, eum, tempore
                  distinctio sed aperiam ut enim fuga corporis animi perspiciatis mollitia nihil ratione repudiandae!
            `;
  let createdBy = "Abhivan Kumarrrr";

  let newAsset = `
              <hr />
              <div>
                  <h2>Asset ${assetId}</h2>
                  <h3>Location : ${location}</h3>
                  <h4>GEO ${geo}</h4>
                  <p>${desc}</p>
                  <h5>Created By: ${createdBy}</h5>
              </div>
          `;

  parent.innerHTML = parent.innerHTML + newAsset;
}

function addNewAssets1() {
  // alert("Hello World");

  // DOM
  let parent = document.querySelector("#parent");

  let newAsset = `
            <hr />
            <div>
                <h2>Asset 1</h2>
                <h3>Location : Bhopal</h3>
                <h4>GEO 78/79</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui rem aut fugiat reiciendis in, eum, tempore
                distinctio sed aperiam ut enim fuga corporis animi perspiciatis mollitia nihil ratione repudiandae!
                </p>
                <h5>Created By: Abhinav</h5>
            </div>
        `;

  parent.innerHTML = parent.innerHTML + newAsset;
}
