const drawAnimalList = (a,empty_phrase='Hey Dummy, add an animal.') => {
   $("#list-page .animallist")
      .html(a.length?makeAnimalList(a):empty_phrase);
}

const makeAnimalList = templater(o=>`
<div class="animallist-item js-animal-jump" data-id="${o.id}">
    <div class="animallist-image">
        <img src="${o.img}" alt="">
    </div>
    <div class="animallist-description">
        <div class="animallist-name"><strong>Name: </strong>${o.name}</div>
        <div class="animallist-type"><strong>Type: </strong> ${o.type}</div>
        <div class="animallist-time"><strong>Last Time Saw: </strong> 1 day ago</div>
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
                <p class="animal-profile-name"><strong>Tracking Times: </strong>5</p>
        	</div>
    	</div>
    </div>

    <div class="profile-bottom" style="flex:1;position:relative;overflow:hidden">
         
    <div class="tabgroup">
        <div class="tabs">
            <div class="tab active">Map</div>
            <div class="tab">History</div>
            <div class="tab">Stats</div>
        </div>
         
        <div class="contents">
       
        <div class="content active">
               
            
               
            <div class="profilemap-container">
                <div class="map"></div>
            </div>
            <div class="floater top right">
                <div class="btn-circle"><a href="#location-add-page">&plus;</a></div>
            </div>
        </div>


        <div class="content overscroll content-history">
            <div class="content-title">Tracking Record</div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatum minus quod, perferendis, dolores assumenda tempore, incidunt aliquam distinctio accusamus praesentium? Eum consequuntur asperiores beatae nulla magni natus repellendus a quis quisquam, quaerat ullam exercitationem magnam nemo necessitatibus nihil, dolores quo aliquam et autem minima veritatis ipsam fugit eaque! Unde.</p>
                <p>Magnam autem fuga deleniti impedit dolore animi temporibus qui commodi aperiam ratione. Blanditiis iusto illum facere sed, repellendus, nesciunt sint rem quibusdam velit sapiente aliquid sit nemo quasi voluptate ea perspiciatis quia eligendi praesentium harum! Ipsam voluptatum recusandae cumque sit illo iste velit sequi porro ducimus, necessitatibus dolore, magnam fugit!</p>
                <p>Ad laborum eum eius vero ullam est debitis. Ducimus praesentium quae aperiam amet ullam distinctio a similique ratione aliquid illo tempore, perspiciatis! Dolore dolor distinctio deserunt nostrum repellat nulla quae illum. Iure, ut repellendus eaque nobis, quaerat unde optio commodi quod, labore porro, numquam perferendis quam. Quas dolorum sint, laudantium.</p>
                <p>Vero provident error amet hic aspernatur sed delectus. Repudiandae quas, tempora atque quo dolore eos eius necessitatibus officiis quae numquam facilis minus iste? Perspiciatis ut expedita, quas veritatis laborum. Pariatur officiis nihil totam iusto doloribus ex quas expedita quidem exercitationem hic velit fugiat culpa et, architecto laudantium unde asperiores dolor.</p>
            </div>
        </div>
            
        <div class="content overscroll">
            <div>
                <img src="img/stats.png">
            </div>
        </div>
            
        </div>     
   
	</div>
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
        <p class="modal-text-title">Tracking Date</p>
        <p>${o.date_create}</p>
        <p class="modal-text-title">Tracking Location</p>
        <p>100 Exchange street, Boston, MA</p>
        <p class="modal-text-title">Note</p>
        <p>2 weeks after last time I saw Andy, the wound on his cheek seems to be cured. I found him this time besides the food waste bin at the street corner. The weather is getting cold, so I guess it would be easier for stay cats like him to find food not rotten yet from trash bins.</p>
    </div>
    
`;

const makeAnimalEditForm = templater(o=>`
<div class="animal-edit-icon"><img src="${o.img}"></div>

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
<div class="user-photo-icon"><img src="${o.img}" alt=""></div>

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