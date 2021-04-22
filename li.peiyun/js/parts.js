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
               
            <div class="floater top right">
            	<div class="btn-circle"><a href="#profile-add-location-page">&plus;</a></div>
         	</div>
               
            <div class="profilemap-container">
                <img src="img/profilemap.jpg">
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