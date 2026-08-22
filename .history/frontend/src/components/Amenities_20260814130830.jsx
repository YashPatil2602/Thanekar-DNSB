 function Amenities() {
     const amenities = [{
             title: "Rooftop Solar",
             description: "Energy-efficient rooftop solar facilities.",
         },
         {
             title: "Rooftop Gym",
             description: "Stay active with modern fitness facilities.",
         },
         {
             title: "Rooftop Play Area",
             description: "A safe and enjoyable space for children.",
         },
         {
             title: "Spacious Parking",
             description: "Convenient parking for residents and visitors.",
         },
         {
             title: "Premium Residences",
             description: "Thoughtfully planned 2 & 3 BHK residences.",
         },
         {
             title: "Landscaped Spaces",
             description: "Beautiful open spaces for a relaxed lifestyle.",
         },
     ];

     return ( <
         section id = "amenities"
         className = "amenities-section" >
         <
         div className = "amenities-container" >

         <
         div className = "section-label" >
         LIFESTYLE <
         /div>

         <
         h2 > Premium Amenities < /h2>

         <
         p className = "amenities-intro" >
         Enjoy thoughtfully planned amenities designed to make everyday living comfortable, convenient and enjoyable. <
         /p>

         <
         div className = "amenities-grid" > {
             amenities.map((amenity, index) => ( <
                 div className = "amenity-card"
                 key = { index } >

                 <
                 div className = "amenity-number" > { String(index + 1).padStart(2, "0") } <
                 /div>

                 <
                 h3 > { amenity.title } < /h3>

                 <
                 p > { amenity.description } < /p>

                 <
                 /div>
             ))
         } <
         /div>

         <
         /div> <
         /section>
     );
 }

 export default Amenities;