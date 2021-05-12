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
 
   console.log(d)

   $("#list-page .animallist").html(makeAnimalList(d.result));
}

// User Profile Page
const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',
   	params:[sessionStorage.userId]});
  
   console.log(d)

   $("#user-profile-page .user-profile").html(makeUserProfile(d.result));
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