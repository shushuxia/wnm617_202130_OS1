const drawAnimalList = (a) => {
   $("#list-page .animallist")
      .html(a.length?makeAnimalList(a):showEmptyMessage);
}

const showEmptyMessage = templater(o=>`
<img class="emoji" src="img/qiche.gif">
<div class="search-empty">
    Opps, no animal found.
</div>
`);

const showAddGuide = templater(o=>`
<div class="add-guide">
You havn't tracked any animal yet.<br/>
  Start to track your animal!
  <img class="draw-next" src="img/icon/drawnext.png">
</div>
`);


const makeAnimalList = templater(o=>`
<div class="animallist-item js-animal-jump" data-id="${o.id}">
    <div class="animallist-image">
        <img src="${o.img}" alt="">
    </div>
    <div class="animallist-description">
        <div class="animallist-name"><strong>Name: </strong>${o.name}</div>
        <div class="animallist-type"><strong>Type: </strong> ${o.type}</div>
        <div class="animallist-time"><strong>Breed: </strong> ${o.breed}</div>
    </div>
</div>  
`);

const makeUserProfile = templater(o=>`
	<div class="profile-image">
        <img src="${o.img}" alt="">
    </div>
    <div class="profile-bg"></div>
         
    <div class="profile-body">
        <div class="profile-name">${o.name}</div>
        <p> Recorded <span class="keyword">21</span> trackings in total.</p>
        <p> Tracked <span class="keyword">6</span> animals in total.</p>
        <p> Favorite catogory to track is <span class="keyword">cat</span>.</p>
        <p> Favorite animal to track is <span class="keyword">Andy</span>.</p>
    </div>
    <div class="setting"><a href="#settings-page">
    	<img src="img/icon/setting.svg" alt=""></a></div>
`);

const makeAnimalProfile = templater(o=>`
	
	<div class="profile-top-bg"></div>
    <div class="profile-top">
        <div class="animal-profile-image"><img src="${o.img}"></div>
        <div class="animal-profile-text">
            <p class="animal-profile-name"><strong>Name: </strong>${o.name}</p>
            <div class="animal-profile-info">
                <p class="animal-profile-name"><strong>Type: </strong>${o.type}</p>
                <p class="animal-profile-name"><strong>Breed: </strong>${o.breed}</p>
        	</div>
    	</div>
    </div>
   
    <div class="profile-description">
        <strong>Description: </strong>${o.description}
    </div>


	
`);

const makeRecentModal = o =>`
    <div class="modal-image">
        <a href="#" class="js-animal-jump" data-id="${o.animal_id}"><img src="${o.img}"></a>
    </div>
    <div class="modal-text">
        <p class="modal-text-title">Name</p>
        <p>${o.name}</p>
        <p class="modal-text-title">Type</p>
        <p>${o.type}</p>
        <p class="modal-text-title">Breed</p>
        <p>${o.breed}</p>
        <p class="modal-text-title">Description</p>
        <p>${o.description}</p>
    </div>
    
`;

const makeRecentModalLocation = o =>`
    <div class="modal-text">
        <p class="modal-text-title">Traking Time</p>
        <p>${o.date_create}</p>        
        <p class="modal-text-title">Journal</p>
        <p>${o.journal}</p>

    </div>
    
`;

const makeAnimalEditForm = templater(o=>`
<div>
   <input type="hidden" id="animal-edit-image" value="${o.img}">
   <label class="image-uploader thumbnail picked" style="background-image:url('${o.img}')">
      <input type="file" data-role="none" id="animal-edit-upload">
   </label>
</div>

<div class="form-control">
    <label for="animal-edit-name" class="form-label">Name</label>
    <input id="animal-edit-name" type="text" class="form-input" data-role="none" placeholder="Type animal name" value=${o.name}>
</div>
<div class="form-control">
    <label for="animal-edit-type" class="form-label">Type</label>
    <input id="animal-edit-type" type="text" class="form-input" data-role="none" placeholder="Type animal type" value="${o.type}">
</div>
<div class="form-control">
    <label for="animal-edit-breed" class="form-label">Type</label>
    <input id="animal-edit-breed" type="text" class="form-input" data-role="none" placeholder="Type animal breed" value="${o.breed}">
</div>
<div class="form-control">
    <label for="animal-edit-description" class="form-label">Description</label>
    <textarea id="animal-edit-description" class="form-box" data-role="none" placeholder="Write note about the animal">${o.description}</textarea>
</div>
<div class="js-animal-delete delete-animal" data-id="${o.id}"><a href="#">Delete</a></div>
`);

const makeUserEditForm = templater(o=>`
<a href="#user-upload-page"><div class="user-photo-icon"><img src="${o.img}" alt=""></div>
</a>

<div class="form-control">
    <label for="user-edit-username" class="form-label">Username</label>
    <input id="user-edit-username" type="text" class="form-input" data-role="none" placeholder="Type your username" value="${o.username}">
</div>
<div class="form-control">
    <label for="user-edit-name" class="form-label">Full Name</label>
    <input id="user-edit-name" type="text" class="form-input" data-role="none" placeholder="Type your name" value="${o.name}">
</div>
<div class="form-control">
    <label for="user-edit-email" class="form-label">Email</label>
    <input id="user-edit-email" type="text" class="form-input" data-role="none" placeholder="Type your email" value="${o.email}">
</div>

`);


const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>`<div class="filter" data-field="${type}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</div>`)(a);
}

const makeFilterList = (animals) => {
   return `
   <div class="filter" data-field="type" data-value="all">All</div> | 
   ${filterList(animals,'type')} | 
   ${filterList(animals,'breed')} 
   `;
}


const makeUploaderImage = (el,name,folder='') => {
   $(el).parent().css({'background-image':`url('${folder+name}')`}).addClass("picked")
      .prev().val(folder+name)
}