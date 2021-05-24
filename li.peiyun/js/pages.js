// Recent Page
const RecentPage = async() => {

   let d = await query({type:'recent_locations',
      params:[sessionStorage.userId]});
   
   console.log(d)

   let valid_animals = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

   let map_el = await makeMap("#recent-page .map");

   makeMarkers(map_el,valid_animals);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){
         // ACTIVATE EXAMPLE
         $("#recent-profile-modal").addClass("active");
         $("#recent-profile-modal .modal-body")
            .html(makeRecentModal(valid_animals[i]))
      })
   })
}



// List Page
const ListPage = async() => {
   let d = await query({type:'animals_by_user_id',
      params:[sessionStorage.userId]});

   $("#list-page .filter-list").html(makeFilterList(d.result))
 
   console.log(d)

   $("#list-page .animallist")
   .html(d.result.length?makeAnimalList(d.result):showAddGuide);
}

// User Profile Page
const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',
      params:[sessionStorage.userId]});
  
   console.log(d)

   $("#user-profile-page .user-profile").html(makeUserProfile(d.result));
} 

const UserUploadPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage($("#user-upload-input"),d.result[0].img)
   });
}

// Animal Profile Page
const AnimalProfilePage = async() => {
    query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   }).then(d=>{
      console.log(d)

      $("#animal-profile-page .animal-profile")
         .html(makeAnimalProfile(d.result));
   });

   query({
      type:'locations_by_animal_id',
      params:[sessionStorage.animalId]
   }).then(d=>{
      makeMap("#animal-profile-page .map").then(map_el=>{
         makeMarkers(map_el,d.result);
      })
   })
} 


const AnimalEditPage = async() => {
    let d = await query({type:'animal_by_id',
      params:[sessionStorage.animalId]});
  
   console.log(d)

   $("#animal-edit-page #animal-edit-form").html(makeAnimalEditForm(d.result));
} 

const ProfileSettingsPage = async() => {
    let d = await query({type:'user_by_id',
      params:[sessionStorage.userId]});
  
   console.log(d)

   $("#profile-settings-page #user-edit-form").html(makeUserEditForm(d.result));
} 


const AddLocationPage = async() => {
   let map_el = await makeMap("#location-add-page .map");
   makeMarkers(map_el,[]);

   let map = map_el.data("map");

   map.addListener("click",function(e){
      console.log(e, map.getCenter())

      let posFromClick = {
         lat:e.latLng.lat(),
         lng:e.latLng.lng(),
         icon:"img/icon/paw.png"
      };
      let posFromCenter = {
         lat:map.getCenter().lat(),
         lng:map.getCenter().lng(),
         icon:"img/icon/paw.png"
      };

      $("#location-add-lat").val(posFromClick.lat)
      $("#location-add-lng").val(posFromClick.lng)

      makeMarkers(map_el,[posFromClick])
   })
}