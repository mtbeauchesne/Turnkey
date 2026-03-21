import { useState, useEffect, useRef } from "react";

const B=[
  // MARRIOTT — 26 brands
  {id:"ritz",f:"Marriott",n:"The Ritz-Carlton",c:["#1A1A2E","#002B5C","#C5A35F"],t:"Impeccable luxury, personalized.",l:"RC",ct:["Reserve on Marriott.com"],tg:"#RitzCarlton #MarriottBonvoy",no:"cheap, budget"},
  {id:"stregis",f:"Marriott",n:"St. Regis",c:["#1B1B1B","#8B2332","#D4C5A9"],t:"Bespoke butler, classic sophistication.",l:"SR",ct:["Reserve Your Stay"],tg:"#StRegis #MarriottBonvoy",no:"budget, affordable"},
  {id:"edition",f:"Marriott",n:"EDITION",c:["#0D0D0D","#C8A97E","#F5F0E8"],t:"Taste-making design, nightlife.",l:"ED",ct:["Book EDITION"],tg:"#EDITIONHotels #MarriottBonvoy",no:"traditional, corporate"},
  {id:"luxcoll",f:"Marriott",n:"The Luxury Collection",c:["#1C1C1C","#9B7B3C","#EDE8DF"],t:"Iconic destinations, local heritage.",l:"LC",ct:["Explore Collection"],tg:"#LuxuryCollection #MarriottBonvoy",no:"generic, chain"},
  {id:"whotels",f:"Marriott",n:"W Hotels",c:["#0D0D0D","#7B68EE","#E0E0E0"],t:"Bold lifestyle, electric energy.",l:"W",ct:["Book W"],tg:"#WHotels #MarriottBonvoy",no:"conservative, stuffy"},
  {id:"jwmarriott",f:"Marriott",n:"JW Marriott",c:["#1A1A2E","#6B5B3E","#F0EBE0"],t:"Holistic luxury, well-being.",l:"JW",ct:["Reserve JW Marriott"],tg:"#JWMarriott #MarriottBonvoy",no:"budget, cheap"},
  {id:"marriott",f:"Marriott",n:"Marriott Hotels",c:["#1B1B1B","#8C1D40","#FFF"],t:"Modern, thoughtful, heartfelt.",l:"MH",ct:["Book on Marriott.com"],tg:"#MarriottHotels #MarriottBonvoy",no:"cheap, discount, motel"},
  {id:"sheraton",f:"Marriott",n:"Sheraton",c:["#1A1A2E","#59462D","#F5F0E8"],t:"Community connection, globally rooted.",l:"SH",ct:["Reserve Sheraton"],tg:"#Sheraton #MarriottBonvoy",no:"cheap, outdated"},
  {id:"delta",f:"Marriott",n:"Delta Hotels",c:["#1B1B1B","#3A6B8C","#E8F0F5"],t:"Simple made perfect.",l:"DH",ct:["Book Delta"],tg:"#DeltaHotels #MarriottBonvoy",no:"luxury, exclusive"},
  {id:"westin",f:"Marriott",n:"The Westin",c:["#1B365D","#8DB3E2","#FFF"],t:"Wellness, rest and renewal.",l:"WE",ct:["Wellness Escape"],tg:"#Westin #MarriottBonvoy",no:"party, nightlife"},
  {id:"lemeridien",f:"Marriott",n:"Le Méridien",c:["#1A1A2E","#5C7A99","#F0EDE5"],t:"European chic, savor the good life.",l:"LM",ct:["Discover Le Méridien"],tg:"#LeMeridien #MarriottBonvoy",no:"basic, budget"},
  {id:"renaissance",f:"Marriott",n:"Renaissance Hotels",c:["#1B1B1B","#8B6F4E","#D4C5A9"],t:"Spontaneous discovery, local.",l:"RH",ct:["Discover More"],tg:"#Renaissance #MarriottBonvoy",no:"cheap, generic"},
  {id:"gaylord",f:"Marriott",n:"Gaylord Hotels",c:["#1A1A2E","#6B3A2A","#E8DFD0"],t:"Grand convention + entertainment.",l:"GY",ct:["Plan Your Event"],tg:"#GaylordHotels #MarriottBonvoy",no:"small, intimate"},
  {id:"courtyard",f:"Marriott",n:"Courtyard by Marriott",c:["#003B5C","#78BE20","#FFF"],t:"Reliable, energizing, business.",l:"CY",ct:["Book Direct"],tg:"#Courtyard #MarriottBonvoy",no:"luxury, exclusive"},
  {id:"fourpoints",f:"Marriott",n:"Four Points",c:["#1B1B1B","#6B8E50","#F0EDE5"],t:"Straightforward, craft beer culture.",l:"FP",ct:["Book Four Points"],tg:"#FourPoints #MarriottBonvoy",no:"luxury, exclusive"},
  {id:"springhill",f:"Marriott",n:"SpringHill Suites",c:["#1B365D","#70AD47","#FFF"],t:"All-suite, bright, spacious.",l:"SS",ct:["Book SpringHill"],tg:"#SpringHillSuites #MarriottBonvoy",no:"luxury, exclusive"},
  {id:"fairfield",f:"Marriott",n:"Fairfield by Marriott",c:["#1B1B1B","#4A8C50","#F5F0E8"],t:"Simple, inviting, warm.",l:"FF",ct:["Book Fairfield"],tg:"#Fairfield #MarriottBonvoy",no:"luxury, upscale"},
  {id:"ac",f:"Marriott",n:"AC Hotels",c:["#0D0D0D","#707070","#FFF"],t:"European design precision.",l:"AC",ct:["Reserve AC Hotels"],tg:"#ACHotels #MarriottBonvoy",no:"flashy, kitschy"},
  {id:"aloft",f:"Marriott",n:"Aloft Hotels",c:["#1A1A2E","#8B5CF6","#E0E0E0"],t:"Bold, punchy, social scenes.",l:"AL",ct:["Book Aloft"],tg:"#AloftHotels #MarriottBonvoy",no:"traditional, stuffy"},
  {id:"moxy",f:"Marriott",n:"Moxy Hotels",c:["#000","#FF2D6F","#FFD100"],t:"Playful, irreverent, fun.",l:"MX",ct:["Book at Moxy"],tg:"#MoxyHotels #MoxyMoment",no:"elegant, refined"},
  {id:"protea",f:"Marriott",n:"Protea Hotels",c:["#1B365D","#C9A84C","#F5F0E8"],t:"Africa's largest, locally inspired.",l:"PH",ct:["Book Protea"],tg:"#ProteaHotels #MarriottBonvoy",no:"generic, chain"},
  {id:"citizenm",f:"Marriott",n:"citizenM",c:["#1A1A2E","#E84855","#FFF"],t:"Tech-savvy, stylish, affordable luxury.",l:"cM",ct:["Book citizenM"],tg:"#citizenM #MarriottBonvoy",no:"traditional, stuffy"},
  {id:"autograph",f:"Marriott",n:"Autograph Collection",c:["#1C1C1C","#9B8B6E","#F5F0E8"],t:"Exactly Like Nothing Else.",l:"AX",ct:["Explore Autograph"],tg:"#AutographCollection",no:"chain, standard"},
  {id:"tribute",f:"Marriott",n:"Tribute Portfolio",c:["#1B1B1B","#7B6B4E","#E8DFD0"],t:"Characterful independents.",l:"TX",ct:["Discover Tribute"],tg:"#TributePortfolio",no:"chain, generic"},
  {id:"residenceinn",f:"Marriott",n:"Residence Inn",c:["#1B365D","#6B8E50","#FFF"],t:"Extended stay leader.",l:"RI",ct:["Book Residence Inn"],tg:"#ResidenceInn #MarriottBonvoy",no:"temporary, basic"},
  {id:"element",f:"Marriott",n:"Element Hotels",c:["#1B1B1B","#70AD47","#E8F0E8"],t:"Nature-inspired, eco-extended stay.",l:"EL",ct:["Book Element"],tg:"#ElementHotels #MarriottBonvoy",no:"wasteful, indulgent"},
  // HILTON — 20 brands
  {id:"waldorf",f:"Hilton",n:"Waldorf Astoria",c:["#1A1A2E","#C9A84C","#F0EDE5"],t:"Iconic luxury, legendary.",l:"WA",ct:["Reserve Waldorf Astoria"],tg:"#WaldorfAstoria #HiltonHonors",no:"budget, cheap"},
  {id:"conrad",f:"Hilton",n:"Conrad Hotels",c:["#1A1A2E","#C9A84C","#F8F6F0"],t:"Smart luxury, bold design.",l:"CN",ct:["Discover Conrad"],tg:"#ConradHotels #HiltonHonors",no:"budget, basic"},
  {id:"lxr",f:"Hilton",n:"LXR Hotels & Resorts",c:["#1B1B1B","#8B6F4E","#F0EDE5"],t:"Distinctive luxury, adventure.",l:"LX",ct:["Explore LXR"],tg:"#LXRHotels #HiltonHonors",no:"chain, generic"},
  {id:"nomad",f:"Hilton",n:"NoMad Hotels",c:["#1A1A2E","#8C6B3E","#E8DFD0"],t:"Artfully-lived, collective spirit.",l:"NM",ct:["Book NoMad"],tg:"#NoMadHotels #HiltonHonors",no:"corporate, basic"},
  {id:"signia",f:"Hilton",n:"Signia by Hilton",c:["#0D0D0D","#5C7A99","#E0E0E0"],t:"Meetings + events sophistication.",l:"SG",ct:["Book Signia"],tg:"#SigniaByHilton #HiltonHonors",no:"casual, budget"},
  {id:"hilton",f:"Hilton",n:"Hilton Hotels & Resorts",c:["#003B5C","#0071C5","#FFF"],t:"Century of hospitality.",l:"HH",ct:["Book at Hilton.com"],tg:"#Hilton #HiltonHonors",no:"cheap, budget, motel"},
  {id:"canopy",f:"Hilton",n:"Canopy by Hilton",c:["#2D4A3E","#7FB069","#F4F1E8"],t:"Neighborhood enthusiast.",l:"CP",ct:["Stay at Canopy"],tg:"#CanopyByHilton #HiltonHonors",no:"generic, chain"},
  {id:"curio",f:"Hilton",n:"Curio Collection",c:["#2C2C2C","#D4A76A","#FAF7F0"],t:"One-of-a-kind, immersive.",l:"QQ",ct:["Explore Curio"],tg:"#CurioCollection #HiltonHonors",no:"chain, standard"},
  {id:"graduate",f:"Hilton",n:"Graduate Hotels",c:["#1A1A2E","#D4533B","#F5E8C1"],t:"College town charm, nostalgia.",l:"GR",ct:["Book Graduate"],tg:"#GraduateHotels #HiltonHonors",no:"corporate, stuffy"},
  {id:"doubletree",f:"Hilton",n:"DoubleTree by Hilton",c:["#1B365D","#6B8E50","#FFF"],t:"Warm cookie welcome.",l:"DT",ct:["Book DoubleTree"],tg:"#DoubleTree #HiltonHonors",no:"cheap, basic, motel"},
  {id:"tapestry",f:"Hilton",n:"Tapestry Collection",c:["#2C2C2C","#8B5C7A","#F0E8F0"],t:"Vibrant personality, original.",l:"TP",ct:["Explore Tapestry"],tg:"#TapestryCollection #HiltonHonors",no:"chain, generic"},
  {id:"embassy",f:"Hilton",n:"Embassy Suites",c:["#003B5C","#5C9A3E","#FFF"],t:"Two-room suites, free breakfast.",l:"ES",ct:["Book Embassy Suites"],tg:"#EmbassySuites #HiltonHonors",no:"cheap, cramped"},
  {id:"tempo",f:"Hilton",n:"Tempo by Hilton",c:["#1B1B1B","#3A8C6B","#F0F5F0"],t:"Stylish, wellness, momentum.",l:"TE",ct:["Stay at Tempo"],tg:"#TempoByHilton #HiltonHonors",no:"budget, basic"},
  {id:"outset",f:"Hilton",n:"Outset Collection",c:["#1A1A2E","#7B6B4E","#F0EDE5"],t:"Soulful, surprising indie stays.",l:"OS",ct:["Explore Outset"],tg:"#OutsetCollection #HiltonHonors",no:"chain, corporate"},
  {id:"motto",f:"Hilton",n:"Motto by Hilton",c:["#1A1A2E","#E84855","#FFD100"],t:"Micro-hotel, urban, connected.",l:"MO",ct:["Book Motto"],tg:"#MottoByHilton #HiltonHonors",no:"luxury, spacious"},
  {id:"hgi",f:"Hilton",n:"Hilton Garden Inn",c:["#003B5C","#70AD47","#FFF"],t:"Upscale yet affordable.",l:"GI",ct:["Book HGI"],tg:"#HiltonGardenInn #HiltonHonors",no:"luxury, exclusive"},
  {id:"hampton",f:"Hilton",n:"Hampton by Hilton",c:["#003B71","#FF6B00","#FFF"],t:"Friendly, Hamptonality.",l:"HX",ct:["Book Hampton"],tg:"#Hampton #Hamptonality",no:"luxury, exclusive"},
  {id:"tru",f:"Hilton",n:"Tru by Hilton",c:["#1A1A2E","#00B4D8","#FFD100"],t:"Simple, spirited, value.",l:"TU",ct:["Book Tru"],tg:"#TruByHilton #HiltonHonors",no:"luxury, upscale"},
  {id:"spark",f:"Hilton",n:"Spark by Hilton",c:["#1A1A2E","#E85D3A","#FFD100"],t:"Friendly, dependable, simplified.",l:"SK",ct:["Book Spark"],tg:"#SparkByHilton #HiltonHonors",no:"luxury, exclusive"},
  {id:"homewood",f:"Hilton",n:"Homewood Suites",c:["#1B365D","#70AD47","#FFF"],t:"Extended stay, make yourself home.",l:"HW",ct:["Book Homewood"],tg:"#HomewoodSuites #HiltonHonors",no:"temporary, basic"},
  {id:"home2",f:"Hilton",n:"Home2 Suites",c:["#1A1A2E","#78BE20","#FFF"],t:"Flexible extended stay, eco.",l:"H2",ct:["Book Home2"],tg:"#Home2Suites #HiltonHonors",no:"luxury, wasteful"},
  {id:"livsmart",f:"Hilton",n:"LivSmart Studios",c:["#1B1B1B","#5C7A99","#E8F0F5"],t:"Smart, efficient studio living.",l:"LS",ct:["Book LivSmart"],tg:"#LivSmart #HiltonHonors",no:"luxury, spacious"},
  // IHG — 15 brands
  {id:"sixsenses",f:"IHG",n:"Six Senses",c:["#2D4A3E","#8DB3A2","#F0F5F0"],t:"Wellness pioneer, sustainability.",l:"6S",ct:["Explore Six Senses"],tg:"#SixSenses #IHGOneRewards",no:"budget, generic"},
  {id:"regent",f:"IHG",n:"Regent Hotels",c:["#0D0D0D","#C9A84C","#F5F0E8"],t:"Exquisite, Asian-inspired luxury.",l:"RG",ct:["Reserve Regent"],tg:"#RegentHotels #IHGOneRewards",no:"budget, basic"},
  {id:"intercontinental",f:"IHG",n:"InterContinental",c:["#1A1A2E","#8B6F2E","#F0EDE5"],t:"Luxury, rich in culture.",l:"IC",ct:["Book at IHG.com"],tg:"#InterContinental #IHGOneRewards",no:"budget, cheap"},
  {id:"vignette",f:"IHG",n:"Vignette Collection",c:["#2B2B2B","#8C7853","#EDE8DF"],t:"Story-rich, individually curated.",l:"VG",ct:["Discover Vignette"],tg:"#VignetteCollection #IHGOneRewards",no:"chain, generic"},
  {id:"kimpton",f:"IHG",n:"Kimpton Hotels",c:["#1C1C1C","#E84855","#F7F3E3"],t:"Boldly individual, pet-friendly.",l:"KH",ct:["Stay Different"],tg:"#KimptonHotels #StayHuman",no:"corporate, standard"},
  {id:"hotelindigo",f:"IHG",n:"Hotel Indigo",c:["#1A1A2E","#3A6B8C","#E8F0F5"],t:"Boutique, neighborhood story.",l:"IN",ct:["Explore Indigo"],tg:"#HotelIndigo #IHGOneRewards",no:"chain, generic"},
  {id:"voco",f:"IHG",n:"voco Hotels",c:["#1B1B1B","#4A8C50","#F5F0E8"],t:"Reliable, charming, unstuffy.",l:"VO",ct:["Book voco"],tg:"#vocoHotels #IHGOneRewards",no:"budget, cheap"},
  {id:"hualuxe",f:"IHG",n:"HUALUXE",c:["#1A1A2E","#C9A84C","#F8F6F0"],t:"Chinese luxury, cultural heritage.",l:"HX",ct:["Book HUALUXE"],tg:"#HUALUXE #IHGOneRewards",no:"budget, western"},
  {id:"crowneplaza",f:"IHG",n:"Crowne Plaza",c:["#1A1A2E","#6B5B3E","#E8DFD0"],t:"Business, productivity + comfort.",l:"CX",ct:["Book Crowne Plaza"],tg:"#CrownePlaza #IHGOneRewards",no:"cheap, casual"},
  {id:"evenhotels",f:"IHG",n:"EVEN Hotels",c:["#1B1B1B","#70AD47","#E8F0E8"],t:"Wellness-focused, healthy.",l:"EV",ct:["Stay at EVEN"],tg:"#EVENHotels #IHGOneRewards",no:"indulgent, unhealthy"},
  {id:"hiexpress",f:"IHG",n:"Holiday Inn Express",c:["#007A3D","#FFF","#003B1F"],t:"Smart, uncomplicated, breakfast.",l:"HE",ct:["Book HIExpress"],tg:"#HIExpress #IHGOneRewards",no:"luxury, upscale"},
  {id:"holidayinn",f:"IHG",n:"Holiday Inn",c:["#007A3D","#FFF","#003B1F"],t:"Welcoming, family-friendly.",l:"HI",ct:["Book Holiday Inn"],tg:"#HolidayInn #IHGOneRewards",no:"luxury, exclusive"},
  {id:"garner",f:"IHG",n:"Garner Hotels",c:["#1B1B1B","#D4A853","#F5F0E8"],t:"Comfortable, straightforward.",l:"GA",ct:["Book Garner"],tg:"#GarnerHotels #IHGOneRewards",no:"luxury, boutique"},
  {id:"avid",f:"IHG",n:"avid hotels",c:["#1A1A2E","#5C7A99","#FFF"],t:"Essentials done exceptionally.",l:"AV",ct:["Book avid"],tg:"#avidhotels #IHGOneRewards",no:"luxury, upscale"},
  {id:"staybridge",f:"IHG",n:"Staybridge Suites",c:["#1B365D","#6B8E50","#FFF"],t:"Extended stay, communal.",l:"SB",ct:["Book Staybridge"],tg:"#Staybridge #IHGOneRewards",no:"luxury, exclusive"},
  {id:"candlewood",f:"IHG",n:"Candlewood Suites",c:["#1A1A2E","#8C6B3E","#F5F0E8"],t:"Extended stay, simple value.",l:"CW",ct:["Book Candlewood"],tg:"#CandlewoodSuites #IHGOneRewards",no:"luxury, premium"},
  {id:"atwell",f:"IHG",n:"Atwell Suites",c:["#1B1B1B","#3A8C6B","#E8F0E8"],t:"Flexible suites, modern.",l:"AT",ct:["Book Atwell"],tg:"#AtwellSuites #IHGOneRewards",no:"luxury, traditional"},
  // WYNDHAM — 18 brands
  {id:"wyndhamgrand",f:"Wyndham",n:"Wyndham Grand",c:["#004236","#C9A84C","#F5F2EB"],t:"One-of-a-kind destinations.",l:"WR",ct:["Book Wyndham Grand"],tg:"#WyndhamGrand #WyndhamRewards",no:"budget, basic"},
  {id:"dolce",f:"Wyndham",n:"Dolce Hotels",c:["#1A1A2E","#8B6F4E","#F0EDE5"],t:"Meetings + conference.",l:"DO",ct:["Book Dolce"],tg:"#DolceHotels #WyndhamRewards",no:"budget, cheap"},
  {id:"registry",f:"Wyndham",n:"Registry Collection",c:["#1B1B1B","#9B7B3C","#F5F0E8"],t:"Handpicked luxury.",l:"RY",ct:["Explore Registry"],tg:"#RegistryCollection #WyndhamRewards",no:"budget, basic"},
  {id:"trademark",f:"Wyndham",n:"Trademark Collection",c:["#2C2C2C","#7B6B4E","#E8DFD0"],t:"Distinctive independents.",l:"TM",ct:["Discover Trademark"],tg:"#TrademarkCollection #WyndhamRewards",no:"chain, generic"},
  {id:"wyndham",f:"Wyndham",n:"Wyndham Hotels",c:["#004236","#70AD47","#F5F2EB"],t:"Business + vacation.",l:"WH",ct:["Book Wyndham"],tg:"#WyndhamHotels #WyndhamRewards",no:"luxury, boutique"},
  {id:"tryp",f:"Wyndham",n:"TRYP by Wyndham",c:["#1A1A2E","#E84855","#FFD100"],t:"Heart of city, local pulse.",l:"TY",ct:["Book TRYP"],tg:"#TRYPbyWyndham #WyndhamRewards",no:"suburban, remote"},
  {id:"wg",f:"Wyndham",n:"Wyndham Garden",c:["#004236","#7AB648","#F5F2EB"],t:"Relaxed, garden-inspired.",l:"WG",ct:["Book Direct"],tg:"#WyndhamGarden #WyndhamRewards",no:"luxury, trendy"},
  {id:"laquinta",f:"Wyndham",n:"La Quinta",c:["#FFC72C","#1E3A5F","#FFF"],t:"Bright, warm, breakfast.",l:"LQ",ct:["Book La Quinta"],tg:"#LaQuinta #WyndhamRewards",no:"luxury, boutique"},
  {id:"ramada",f:"Wyndham",n:"Ramada by Wyndham",c:["#1A1A2E","#6B5B3E","#E8DFD0"],t:"Trusted global brand.",l:"RA",ct:["Book Ramada"],tg:"#Ramada #WyndhamRewards",no:"luxury, exclusive"},
  {id:"baymont",f:"Wyndham",n:"Baymont by Wyndham",c:["#1A1A2E","#5C7A99","#F0EDE5"],t:"Essentials done right.",l:"BY",ct:["Book Baymont"],tg:"#Baymont #WyndhamRewards",no:"luxury, upscale"},
  {id:"daysin",f:"Wyndham",n:"Days Inn",c:["#FFD100","#004236","#FFF"],t:"Bright take on travel.",l:"DI",ct:["Book Days Inn"],tg:"#DaysInn #WyndhamRewards",no:"luxury, exclusive"},
  {id:"super8",f:"Wyndham",n:"Super 8",c:["#E84855","#1A1A2E","#FFF"],t:"Companion on the road.",l:"S8",ct:["Book Super 8"],tg:"#Super8 #WyndhamRewards",no:"luxury, boutique"},
  {id:"howardjohnson",f:"Wyndham",n:"Howard Johnson",c:["#FF6B00","#1A1A2E","#FFF"],t:"Warm, family tradition.",l:"HJ",ct:["Book HoJo"],tg:"#HowardJohnson #WyndhamRewards",no:"luxury, exclusive"},
  {id:"travelodge",f:"Wyndham",n:"Travelodge",c:["#003B5C","#70AD47","#FFF"],t:"Adventure-seekers, great sleep.",l:"TL",ct:["Book Travelodge"],tg:"#Travelodge #WyndhamRewards",no:"luxury, upscale"},
  {id:"microtel",f:"Wyndham",n:"Microtel by Wyndham",c:["#1B1B1B","#3A8C6B","#FFF"],t:"Modern, consistent, affordable.",l:"MT",ct:["Book Microtel"],tg:"#Microtel #WyndhamRewards",no:"luxury, upscale"},
  {id:"wingate",f:"Wyndham",n:"Wingate by Wyndham",c:["#1B365D","#5C9A3E","#FFF"],t:"Business-focused, productive.",l:"WI",ct:["Book Wingate"],tg:"#Wingate #WyndhamRewards",no:"luxury, casual"},
  {id:"hawthorn",f:"Wyndham",n:"Hawthorn Extended Stay",c:["#004236","#8C6B3E","#F5F2EB"],t:"Extended stay, welcoming.",l:"HS",ct:["Book Hawthorn"],tg:"#Hawthorn #WyndhamRewards",no:"luxury, boutique"},
  {id:"americinn",f:"Wyndham",n:"AmericInn",c:["#003B5C","#C9A84C","#FFF"],t:"Genuine hospitality, neighbors.",l:"AI",ct:["Book AmericInn"],tg:"#AmericInn #WyndhamRewards",no:"luxury, exclusive"},
  {id:"dazzler",f:"Wyndham",n:"Dazzler by Wyndham",c:["#1A1A2E","#E07B39","#F5F0E8"],t:"Stylish, Latin American flair.",l:"DZ",ct:["Book Dazzler"],tg:"#Dazzler #WyndhamRewards",no:"budget, basic"},
  {id:"esplendor",f:"Wyndham",n:"Esplendor by Wyndham",c:["#1B1B1B","#9B8B6E","#F0EDE5"],t:"Boutique, distinctive character.",l:"EP",ct:["Book Esplendor"],tg:"#Esplendor #WyndhamRewards",no:"generic, chain"},
  {id:"viennahouse",f:"Wyndham",n:"Vienna House",c:["#1A1A2E","#C9A84C","#F5F0E8"],t:"European cities, cool-yet-comfortable.",l:"VH",ct:["Book Vienna House"],tg:"#ViennaHouse #WyndhamRewards",no:"budget, basic"},
  {id:"echosuites",f:"Wyndham",n:"ECHO Suites",c:["#004236","#70AD47","#E8F0E8"],t:"Extended stay, new generation.",l:"EC",ct:["Book ECHO"],tg:"#ECHOSuites #WyndhamRewards",no:"luxury, boutique"},
  // HYATT — 16 brands
  {id:"parkhyatt",f:"Hyatt",n:"Park Hyatt",c:["#1A1A2E","#8B6F4E","#F0EDE5"],t:"Intimate luxury, residential.",l:"PH",ct:["Reserve Park Hyatt"],tg:"#ParkHyatt #WorldOfHyatt",no:"budget, cheap"},
  {id:"alila",f:"Hyatt",n:"Alila Hotels",c:["#2D4A3E","#8DB3A2","#F0F5F0"],t:"Sustainable luxury, nature.",l:"AA",ct:["Explore Alila"],tg:"#Alila #WorldOfHyatt",no:"urban, corporate"},
  {id:"miraval",f:"Hyatt",n:"Miraval",c:["#2D4A3E","#C9A84C","#F0EDE5"],t:"Wellness resort, mindfulness.",l:"MV",ct:["Explore Miraval"],tg:"#Miraval #WorldOfHyatt",no:"budget, party"},
  {id:"andaz",f:"Hyatt",n:"Andaz",c:["#2D2D2D","#E07B39","#F8F4EF"],t:"Immersive local, unscripted.",l:"AZ",ct:["Discover Andaz"],tg:"#Andaz #WorldOfHyatt",no:"corporate, chain"},
  {id:"thompson",f:"Hyatt",n:"Thompson Hotels",c:["#1A1A1A","#C4A265","#F0EDE5"],t:"Design-centric, rooftop culture.",l:"TH",ct:["Book Thompson"],tg:"#ThompsonHotels #WorldOfHyatt",no:"basic, budget"},
  {id:"dream",f:"Hyatt",n:"Dream Hotels",c:["#0D0D0D","#7B68EE","#E0E0E0"],t:"Nightlife, energy, bold design.",l:"DR",ct:["Book Dream"],tg:"#DreamHotels #WorldOfHyatt",no:"conservative, quiet"},
  {id:"jdv",f:"Hyatt",n:"JdV by Hyatt",c:["#1A1A2E","#E84855","#F7F3E3"],t:"Joy of living, soulful indie.",l:"JV",ct:["Book JdV"],tg:"#JdVbyHyatt #WorldOfHyatt",no:"corporate, chain"},
  {id:"grandhyatt",f:"Hyatt",n:"Grand Hyatt",c:["#1B1B1B","#6B5B3E","#E8DFD0"],t:"Grand scale, world-class.",l:"GH",ct:["Book Grand Hyatt"],tg:"#GrandHyatt #WorldOfHyatt",no:"budget, basic"},
  {id:"hyattregency",f:"Hyatt",n:"Hyatt Regency",c:["#1A1A2E","#5C7A99","#FFF"],t:"Full service, gateway to city.",l:"HR",ct:["Book Hyatt Regency"],tg:"#HyattRegency #WorldOfHyatt",no:"cheap, budget"},
  {id:"hyattcentric",f:"Hyatt",n:"Hyatt Centric",c:["#1B1B1B","#3A8C6B","#E8F0E8"],t:"Center of the action.",l:"HC",ct:["Stay Hyatt Centric"],tg:"#HyattCentric #WorldOfHyatt",no:"remote, suburban"},
  {id:"caption",f:"Hyatt",n:"Caption by Hyatt",c:["#1B1B1B","#E07B39","#FFD100"],t:"Social, local cuisine, vibrant.",l:"CA",ct:["Stay Caption"],tg:"#CaptionByHyatt #WorldOfHyatt",no:"corporate, stuffy"},
  {id:"unscripted",f:"Hyatt",n:"Unscripted Hotels",c:["#1A1A2E","#8B5CF6","#FFD100"],t:"Playful, unpretentious stays.",l:"UN",ct:["Book Unscripted"],tg:"#Unscripted #WorldOfHyatt",no:"formal, corporate"},
  {id:"hyattplace",f:"Hyatt",n:"Hyatt Place",c:["#003B5C","#70AD47","#FFF"],t:"Smart casual, everything fits.",l:"HP",ct:["Book Hyatt Place"],tg:"#HyattPlace #WorldOfHyatt",no:"luxury, exclusive"},
  {id:"hyatthouse",f:"Hyatt",n:"Hyatt House",c:["#1A1A2E","#8C6B3E","#F5F0E8"],t:"Extended stay, feel at home.",l:"HU",ct:["Book Hyatt House"],tg:"#HyattHouse #WorldOfHyatt",no:"luxury, boutique"},
  {id:"hyattstudios",f:"Hyatt",n:"Hyatt Studios",c:["#1A1A2E","#5C7A99","#E8F0F5"],t:"Extended stay, streamlined.",l:"HT",ct:["Book Hyatt Studios"],tg:"#HyattStudios #WorldOfHyatt",no:"luxury, upscale"},
  {id:"unboundcoll",f:"Hyatt",n:"Unbound Collection",c:["#2C2C2C","#8B5C7A","#F0E8F0"],t:"Independent, unexpected.",l:"UB",ct:["Explore Unbound"],tg:"#UnboundCollection #WorldOfHyatt",no:"chain, generic"},
  // CHOICE — 10 brands (incl Radisson)
  {id:"cambria",f:"Choice",n:"Cambria Hotels",c:["#1A1A2E","#5C7A99","#F0EDE5"],t:"Upscale, stylish, local F&B.",l:"CM",ct:["Book Cambria"],tg:"#CambriaHotels #ChoicePrivileges",no:"budget, cheap"},
  {id:"radisson",f:"Choice",n:"Radisson Hotels",c:["#1A1A2E","#003B5C","#FFF"],t:"Scandinavian-inspired, premium.",l:"RD",ct:["Book Radisson"],tg:"#Radisson #ChoicePrivileges",no:"budget, basic"},
  {id:"radissonblu",f:"Choice",n:"Radisson Blu",c:["#003B5C","#0071C5","#FFF"],t:"Upper upscale, iconic design.",l:"RB",ct:["Book Radisson Blu"],tg:"#RadissonBlu #ChoicePrivileges",no:"budget, cheap"},
  {id:"radissonred",f:"Choice",n:"Radisson RED",c:["#1A1A2E","#E84855","#FFF"],t:"Bold, vibrant, lifestyle.",l:"RR",ct:["Book RED"],tg:"#RadissonRED #ChoicePrivileges",no:"conservative, stuffy"},
  {id:"ascend",f:"Choice",n:"Ascend Collection",c:["#1B1B1B","#9B8B6E","#F5F0E8"],t:"Unique upscale independents.",l:"AS",ct:["Explore Ascend"],tg:"#AscendCollection #ChoicePrivileges",no:"chain, cookie-cutter"},
  {id:"comfortinn",f:"Choice",n:"Comfort Inn",c:["#003B5C","#FFD100","#FFF"],t:"Reliable, free breakfast.",l:"CI",ct:["Book Comfort Inn"],tg:"#ComfortInn #ChoicePrivileges",no:"luxury, exclusive"},
  {id:"countryinn",f:"Choice",n:"Country Inn & Suites",c:["#004236","#8C6B3E","#F5F0E8"],t:"Warm, welcoming, cozy.",l:"CS",ct:["Book Country Inn"],tg:"#CountryInn #ChoicePrivileges",no:"luxury, urban"},
  {id:"qualityinn",f:"Choice",n:"Quality Inn",c:["#004236","#78BE20","#FFF"],t:"Affordable quality.",l:"QI",ct:["Book Quality Inn"],tg:"#QualityInn #ChoicePrivileges",no:"luxury, upscale"},
  {id:"sleepinn",f:"Choice",n:"Sleep Inn",c:["#1B365D","#8DB3E2","#FFF"],t:"Designed for restful sleep.",l:"SI",ct:["Book Sleep Inn"],tg:"#SleepInn #ChoicePrivileges",no:"luxury, exclusive"},
  {id:"clarion",f:"Choice",n:"Clarion Hotels",c:["#1A1A2E","#6B5B3E","#E8DFD0"],t:"Full-service, events, reliable.",l:"CL",ct:["Book Clarion"],tg:"#Clarion #ChoicePrivileges",no:"budget, cheap"},
  // BEST WESTERN — 10 brands
  {id:"whLuxury",f:"Best Western",n:"WorldHotels Luxury",c:["#1A1A2E","#9B7B3C","#F0EDE5"],t:"Highest sophistication, bespoke.",l:"WL",ct:["Reserve WorldHotels"],tg:"#WorldHotels #BWRewards",no:"budget, cheap, basic"},
  {id:"whElite",f:"Best Western",n:"WorldHotels Elite",c:["#1B1B1B","#8B6F4E","#F5F0E8"],t:"Superior service, distinctive.",l:"WE",ct:["Book WorldHotels"],tg:"#WorldHotels #BWRewards",no:"budget, basic"},
  {id:"bwpremcoll",f:"Best Western",n:"BW Premier Collection",c:["#1A1A2E","#C9A84C","#F0EDE5"],t:"Curated upscale collection.",l:"PC",ct:["Explore BW Premier"],tg:"#BWPremierCollection #BWRewards",no:"budget, cheap"},
  {id:"vib",f:"Best Western",n:"Vīb by Best Western",c:["#1B1B1B","#00B4D8","#E0E0E0"],t:"Urban, tech-forward, vibrant.",l:"VB",ct:["Book Vīb"],tg:"#VibBestWestern #BWRewards",no:"traditional, dated"},
  {id:"aiden",f:"Best Western",n:"Aiden by Best Western",c:["#1A1A2E","#E07B39","#F5F0E8"],t:"Chic, urban, stylish.",l:"AD",ct:["Book Aiden"],tg:"#AidenByBW #BWRewards",no:"budget, generic"},
  {id:"bwpremier",f:"Best Western",n:"Best Western Premier",c:["#003B71","#C9A84C","#FFF"],t:"Superior comfort, upscale.",l:"BP",ct:["Book BW Premier"],tg:"#BestWesternPremier #BWRewards",no:"budget, cheap"},
  {id:"bwplus",f:"Best Western",n:"Best Western Plus",c:["#003B71","#C9A84C","#FFF"],t:"Enhanced amenities, service.",l:"B+",ct:["Book BW Plus"],tg:"#BestWesternPlus #BWRewards",no:"luxury, exclusive"},
  {id:"bestwestern",f:"Best Western",n:"Best Western",c:["#003B71","#FFD100","#FFF"],t:"Comfort, reliability worldwide.",l:"BW",ct:["Book Best Western"],tg:"#BestWestern #BWRewards",no:"luxury, boutique"},
  {id:"glo",f:"Best Western",n:"GLō Best Western",c:["#1B1B1B","#00B4D8","#E0E0E0"],t:"Sleek, modern, smart tech.",l:"GL",ct:["Book GLō"],tg:"#GLoBestWestern #BWRewards",no:"traditional, dated"},
  {id:"surestay",f:"Best Western",n:"SureStay by BW",c:["#003B71","#78BE20","#FFF"],t:"Value, quality, cost-effective.",l:"SS",ct:["Book SureStay"],tg:"#SureStay #BWRewards",no:"luxury, upscale"},
  // INDEPENDENT
  {id:"ind",f:"Independent",n:"Independent / Boutique",c:["#1A1A1A","#E85D3A","#F4E8C1"],t:"Your unique voice.",l:"◆",ct:["Book Direct"],tg:"",no:""},
];
const FM=[...new Set(B.map(b=>b.f))];
const P=[
  {id:"s1",u:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",lb:"King Suite",sr:"website"},
  {id:"s2",u:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",lb:"Standard",sr:"booking.com"},
  {id:"s3",u:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",lb:"Restaurant",sr:"website"},
  {id:"s4",u:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",lb:"Cocktails",sr:"google"},
  {id:"s5",u:"https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",lb:"Rooftop",sr:"instagram"},
  {id:"s6",u:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",lb:"Exterior",sr:"expedia"},
  {id:"s7",u:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",lb:"Plated",sr:"tripadvisor"},
  {id:"s8",u:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",lb:"Entrance",sr:"website"},
];
const CH=[
  {id:"instagram",lb:"Instagram",c:"#E1306C",a:"IG"},{id:"facebook",lb:"Facebook",c:"#1877F2",a:"FB"},
  {id:"tiktok",lb:"TikTok",c:"#00F2EA",a:"TT"},{id:"email",lb:"Email",c:"#34A853",a:"EM"},
  {id:"blog",lb:"Blog/SEO",c:"#8B5CF6",a:"BG"},
];
const EV=[{id:1,n:"Lancaster Music Fest",d:"Mar 22",di:"0.3mi",h:true},{id:2,n:"Central Market Fair",d:"Mar 28",di:"0.5mi"},{id:3,n:"PA Wine Fest",d:"Apr 19",di:"15mi",h:true}];
const RV=[{id:1,s:"Google",t:"The rooftop bar was stunning. Best cocktails in Lancaster.",g:"Sarah M."},{id:2,s:"TripAdvisor",t:"Farm-to-table brunch was incredible. Coming back.",g:"James L."},{id:3,s:"Booking.com",t:"Beautiful rooms, great staff, perfect location.",g:"Michael R."}];
const SG=[{id:1,n:"Weekend Leisure",ct:1842,c:"#E85D3A"},{id:2,n:"Corporate",ct:956,c:"#5B7FD6"},{id:3,n:"Weddings",ct:234,c:"#9B6ECC"},{id:4,n:"F&B Lovers",ct:612,c:"#7C8C6E"},{id:5,n:"Lapsed",ct:1204,c:"#D4A853"}];
const CP=[{n:"Lancaster Arts Hotel",e:"3.1K",tr:"↑8%"},{n:"Cork Factory Hotel",e:"2.4K",tr:"↑12%"},{n:"Warehouse Hotel",e:"1.8K",tr:"↓3%"}];
const IB=[
  {id:1,ch:"instagram",fr:"@sarah_travels",m:"Omg this rooftop! Do you need reservations?",tm:"2h",se:"positive",re:false},
  {id:2,ch:"facebook",fr:"James M.",m:"What's parking like for the restaurant?",tm:"4h",se:"neutral",re:false},
  {id:3,ch:"instagram",fr:"@foodie_pa",m:"That brunch 🔥 Next chef's table?",tm:"6h",se:"positive",re:true,rp:"Thanks! Next Chef's Table is April 5th!"},
  {id:4,ch:"facebook",fr:"Karen D.",m:"AC issues in our room last weekend.",tm:"12h",se:"negative",re:false},
];
const AQ=[
  {id:1,ti:"Spring Weekend Promo",au:"Front Desk (Amy)",st:"review",cr:"Mar 19",chs:["instagram","facebook"],fl:[]},
  {id:2,ti:"Wine Wednesday",au:"F&B (Carlos)",st:"flagged",cr:"Mar 18",chs:["instagram","email"],fl:["Uses 'cheap' — brand violation"]},
  {id:3,ti:"Wedding Showcase",au:"Events (Diana)",st:"approved",cr:"Mar 17",chs:["instagram","blog"],fl:[]},
  {id:4,ti:"Music Fest Tie-In",au:"Turnkey AI",st:"review",cr:"Mar 20",chs:["instagram","tiktok"],fl:[]},
];
const EG=[{ti:"Sunday Brunch",eg:482,rc:3,nx:"Apr 6"},{ti:"Rooftop Fridays",eg:621,rc:5,nx:"Mar 28"}];
const CL=[
  {id:1,d:15,t:"St Patrick's",ch:["instagram","facebook"],s:"published",eg:342,bk:3,rv:1260},
  {id:2,d:17,t:"Dining Tuesday",ch:["instagram","email"],s:"published",eg:218,bk:2,rv:840},
  {id:3,d:18,t:"Equinox Package",ch:["instagram","facebook","email"],s:"published",eg:456,bk:5,rv:2100},
  {id:4,d:20,t:"Friday Happy Hour",ch:["instagram","tiktok"],s:"scheduled",tm:"4PM"},
  {id:5,d:21,t:"Weekend Getaway",ch:["instagram","facebook","email","blog"],s:"scheduled",tm:"9AM"},
  {id:6,d:22,t:"Music Fest Tie-In",ch:["instagram","tiktok"],s:"suggested",ev:"Music Fest"},
  {id:7,d:25,t:"Wine Wed ♻",ch:["instagram","facebook"],s:"evergreen"},
  {id:8,d:27,t:"Brunch Teaser",ch:["instagram","email"],s:"scheduled",tm:"10AM"},
];
const WK=[{e:1240,r:1680},{e:1890,r:3220},{e:2100,r:4150},{e:2640,r:5480}];
const QP=["Spring weekend promo","Rooftop happy hour","Brunch spotlight","Wedding venue","Music fest tie-in","Review spotlight","Win-back lapsed guests","Pool package"];
const BT={instagram:"Tue/Thu 11AM",facebook:"Wed 1PM",tiktok:"Tue 7PM"};

// ─── MULTI-PROPERTY PORTFOLIO ───
const PORTFOLIO=[
  {id:"p1",nm:"The Linden Hotel",loc:"Lancaster, PA",brand:"Renaissance",posts:30,eng:"7.8K",bk:32,rev:"$14.5K",trend:"↑34%",health:92,color:"#E85D3A"},
  {id:"p2",nm:"Wyndham Garden York",loc:"York, PA",brand:"Wyndham Garden",posts:22,eng:"4.2K",bk:18,rev:"$8.1K",trend:"↑22%",health:78,color:"#7AB648"},
  {id:"p3",nm:"Moxy Allentown",loc:"Allentown, PA",brand:"Moxy",posts:35,eng:"9.4K",bk:41,rev:"$18.2K",trend:"↑48%",health:96,color:"#FF2D6F"},
  {id:"p4",nm:"Renaissance Allentown",loc:"Allentown, PA",brand:"Renaissance",posts:18,eng:"3.1K",bk:12,rev:"$5.8K",trend:"↑8%",health:61,color:"#8B6F4E"},
];

// ─── REVIEW RESPONSES (for Review AI tab) ───
const REVIEW_QUEUE=[
  {id:1,src:"Google",stars:5,txt:"The rooftop bar was stunning. Best cocktails in Lancaster. We'll be back!",guest:"Sarah M.",dt:"Mar 18",responded:false,aiDraft:"Thank you so much, Sarah! Our bartenders will love hearing this. The rooftop is our pride and joy — we can't wait to welcome you back for another round. Cheers!"},
  {id:2,src:"TripAdvisor",stars:5,txt:"Farm-to-table brunch was the highlight of our trip. The french toast was incredible.",guest:"James & Lauren",dt:"Mar 16",responded:false,aiDraft:"James & Lauren, that means the world to us! Our chef sources everything within 30 miles of Lancaster — and yes, the french toast has developed quite the following. See you next time!"},
  {id:3,src:"Booking.com",stars:4,txt:"Beautiful rooms, great location. Only issue was slow elevator during checkout.",guest:"Michael R.",dt:"Mar 14",responded:false,aiDraft:"Thank you for the kind words, Michael! We're glad you enjoyed the room and location. We appreciate the elevator feedback — our team is looking into improving wait times during peak hours. Hope to host you again!"},
  {id:4,src:"Google",stars:2,txt:"Room was not cleaned properly. Found hair in the bathroom. Front desk was unhelpful.",guest:"Patricia K.",dt:"Mar 12",responded:false,aiDraft:"Patricia, we sincerely apologize for this experience — it falls well below our standards. We've addressed this directly with our housekeeping and front desk teams. We'd love the chance to make it right — please reach out to us at gm@thelindenhotel.com so we can discuss this personally."},
  {id:5,src:"Google",stars:5,txt:"Perfect weekend getaway. The king suite was immaculate and the views were breathtaking.",guest:"Amanda K.",dt:"Mar 10",responded:true,aiDraft:""},
];

// ─── AI CALENDAR AUTO-FILL TEMPLATES ───
const AUTOFILL_TEMPLATES=[
  {d:1,t:"Monthly Kick-Off",ch:["instagram","facebook"],type:"brand"},
  {d:3,t:"Midweek Escape Promo",ch:["instagram","email"],type:"promo"},
  {d:5,t:"Friday Happy Hour",ch:["instagram","tiktok"],type:"fnb"},
  {d:7,t:"Weekend Brunch",ch:["instagram","facebook"],type:"fnb"},
  {d:8,t:"Suite Spotlight",ch:["instagram"],type:"rooms"},
  {d:10,t:"Local Event Tie-In",ch:["instagram","facebook","tiktok"],type:"event"},
  {d:12,t:"Guest Review Spotlight",ch:["instagram","facebook"],type:"social"},
  {d:14,t:"Valentine's/Date Night",ch:["instagram","facebook","email"],type:"promo"},
  {d:15,t:"Chef's Table Feature",ch:["instagram","tiktok"],type:"fnb"},
  {d:17,t:"Midweek Corporate Rate",ch:["email","blog"],type:"promo"},
  {d:19,t:"Weekend Getaway",ch:["instagram","facebook","email","blog"],type:"promo"},
  {d:21,t:"Cocktail of the Week",ch:["instagram","tiktok"],type:"fnb"},
  {d:22,t:"Sunday Funday",ch:["instagram","facebook"],type:"brand"},
  {d:24,t:"Meeting Space Promo",ch:["facebook","email","blog"],type:"events"},
  {d:26,t:"Throwback / Guest Photo",ch:["instagram"],type:"social"},
  {d:28,t:"End of Month Flash Sale",ch:["instagram","facebook","email"],type:"promo"},
  {d:29,t:"Local Dining Guide",ch:["blog"],type:"seo"},
  {d:30,t:"Month Recap + Teaser",ch:["instagram","facebook"],type:"brand"},
];

function gc(b){
  const n=b.pn||"The Hotel",r=b.rs||"the restaurant",br=b.br||"the bar",o=b.of||"special rates",tg=b.tg||"#BookDirect",ct=b.ct?.[0]||"Book Direct";
  return{
    instagram:{bd:`Your next escape starts here.\n\n${n}: ${o}. ${r} awaits, ${br} is pouring something worth staying for.\n\n${ct} — link in bio.\n\n${tg}`,ct},
    facebook:{hl:`Spring at ${n}`,bd:`${o} when you book direct.\n\n✓ ${r} — seasonal, local\n✓ ${br} — golden hour cocktails\n✓ Best rate guaranteed\n\nBook now.`,ct},
    tiktok:{hl:"🎬 SCRIPT",bd:`[HOOK 0:00-0:03]\nPOV: You checked into ${n}\n\n[B-ROLL 0:03-0:12]\n• Rooftop sunset pan\n• Cocktail pour\n• Room reveal\n• ${r} plating\n\n[CTA 0:12-0:15]\n${o} — link in bio\n\n🎵 Trending lo-fi\n📐 9:16 · 15s\n${tg}`,ct:"Link in bio"},
    email:{hl:o,bd:`Hi [First Name],\n\n${n} — ${o}.\n\n• ${r} — seasonal farm-to-table\n• ${br} — golden hour\n• Direct = best rate\n\nNo code needed.\n\n— ${n} Team`,ct,sg:"Weekend Leisure"},
    blog:{hl:`Why Stay Sunday at ${n}`,bd:`Most visitors miss the best part.\n\n${o}.\n\n## ${r}\nLocally sourced. Seasonal.\n\n## ${br}, Golden Hour\nSaturday electric. Sunday cinematic.\n\n## ${o}\nBook direct.\n\n---\nSchema: Hotel, Offer\nAI Optimized for Google Overviews`,ct,seo:true},
  };
}

const sc={published:"#34D399",scheduled:"#5B7FD6",draft:"#555",suggested:"#D4A853",evergreen:"#9B6ECC"};
const se={positive:"#34D399",neutral:"#5B7FD6",negative:"#E84848"};

export default function App(){
  const[ph,sP]=useState("login");
  const[st,sS]=useState(0);
  const[vw,sV]=useState("create");
  const[ff,sF]=useState("Marriott");
  const[bi,sB]=useState(null);
  const[pn,sPn]=useState("");const[pl,sPl]=useState("");const[pu,sPu]=useState("");
  const[rs,sRs]=useState("");const[br,sBr]=useState("");const[of_,sOf]=useState("");
  const[scr,sSc]=useState(false);const[scd,sScd]=useState(false);const[sp,sSp]=useState([]);
  const[pr,sPr]=useState("");const[ld,sLd]=useState(false);const[gn,sGn]=useState(null);
  const[ac_,sAc]=useState("instagram");const[pk,sPk]=useState(null);
  const[cs,sCs]=useState(20);const[ib,sIb]=useState(IB);const[aq,sAq]=useState(AQ);
  const[rt,sRt]=useState(null);const[rx,sRx]=useState("");const[if_,sIf]=useState("all");
  const[calPosts,setCalPosts]=useState(CL);const[rvq,setRvq]=useState(REVIEW_QUEUE);
  const[autoFilling,setAutoFilling]=useState(false);
  const r=useRef(null);
  const bd=B.find(x=>x.id===bi);const ax=bd?.c?.[1]||"#E85D3A";
  const bD={pn,rs,br,of:of_,tg:bd?.tg,ct:bd?.ct};

  const doSc=async()=>{sSc(true);await new Promise(r=>setTimeout(r,1500));sScd(true);sSc(false);sSp(P.map(x=>x.id));};
  const doGn=async(t)=>{const p=t||pr;if(!p.trim())return;sLd(true);sGn(null);sPk(null);await new Promise(r=>setTimeout(r,500));const ph=P[Math.floor(Math.random()*P.length)];sPk({ph,ev:EV[0],rv:RV[0],sg:SG[0]});await new Promise(r=>setTimeout(r,400));const c=gc(bD);const g={};for(const ch of CH){await new Promise(r=>setTimeout(r,150));g[ch.id]=c[ch.id];sGn({...g});}sAc("instagram");sLd(false);};
  const sRp=(id)=>{sIb(m=>m.map(x=>x.id===id?{...x,re:true,rp:rx}:x));sRt(null);sRx("");};
  const approveReview=(id)=>{setRvq(q=>q.map(x=>x.id===id?{...x,responded:true}:x));};
  const doAutoFill=async()=>{setAutoFilling(true);const newPosts=[...calPosts];for(let i=0;i<AUTOFILL_TEMPLATES.length;i++){await new Promise(r=>setTimeout(r,80));const t=AUTOFILL_TEMPLATES[i];if(!newPosts.find(p=>p.d===t.d)){newPosts.push({id:100+i,d:t.d,t:t.t,ch:t.ch,s:"suggested"});setCalPosts([...newPosts]);}}setAutoFilling(false);};

  useEffect(()=>{if(ph==="app"&&vw==="create")r.current?.focus();},[ph,vw]);
  const cn=gn?.[ac_];const ch_=CH.find(x=>x.id===ac_);
  const VW=["create","calendar","inbox","reviews","portfolio","compliance","analytics"];

  return(<>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
    :root{--bg:#07070A;--s1:#111115;--s2:#17171C;--b:#1F1F26;--t1:#EDEDF0;--t2:#9090A0;--t3:#555564;--m:'JetBrains Mono',monospace;--d:'Syne',sans-serif;--f:'Outfit',sans-serif}
    *{margin:0;padding:0;box-sizing:border-box}
    @keyframes fi{from{opacity:0}to{opacity:1}}@keyframes su{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes dp{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
    button{transition:all .12s;outline:none}button:hover{filter:brightness(1.12)}input::placeholder{color:var(--t3)}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--b);border-radius:2px}
  `}</style>
  <div style={{minHeight:"100vh",background:"var(--bg)",color:"var(--t1)",fontFamily:"var(--f)"}}>
  {/* NAV */}
  <nav style={{padding:"0 16px",height:44,borderBottom:"1px solid var(--b)",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,background:"rgba(7,7,10,.92)",backdropFilter:"blur(16px)",zIndex:100}}>
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:20,height:20,background:`linear-gradient(135deg,${ax},${ax}CC)`,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:800,color:"#fff",fontFamily:"var(--m)"}}>TK</div>
      <span style={{fontFamily:"var(--m)",fontSize:12,fontWeight:700,color:"var(--t1)"}}>turnkey</span>
    </div>
    {ph==="app"&&<div style={{display:"flex",gap:1}}>{VW.map(v=>{const bg=v==="inbox"?ib.filter(m=>!m.re).length:v==="compliance"?aq.filter(a=>a.st==="review"||a.st==="flagged").length:0;return(<button key={v} onClick={()=>sV(v)} style={{padding:"4px 10px",border:"none",borderRadius:4,background:vw===v?"rgba(255,255,255,.06)":"transparent",color:vw===v?"var(--t1)":"var(--t3)",fontFamily:"var(--m)",fontSize:7,fontWeight:600,cursor:"pointer",textTransform:"capitalize",position:"relative"}}>{v}{bg>0&&<span style={{position:"absolute",top:-1,right:0,width:10,height:10,borderRadius:5,background:v==="compliance"?"#E84848":ax,fontSize:6,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{bg}</span>}</button>)})}</div>}
    {ph==="app"&&bd&&<div style={{display:"flex",alignItems:"center",gap:4}}><span style={{fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",display:"flex",alignItems:"center",gap:3}}><span style={{width:4,height:4,borderRadius:"50%",background:"#34D399"}}/>{pn||bd.n}</span></div>}
  </nav>

  {/* LOGIN */}
{ph==="login"&&<div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)"}}>
<div style={{width:380,padding:40,background:"var(--s1)",border:"1px solid var(--b)",borderRadius:12}}>
<div style={{textAlign:"center",marginBottom:32}}>
<div style={{width:48,height:48,background:"linear-gradient(135deg,#E85D3A,#FF8C42)",borderRadius:10,display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:16}}><span style={{fontFamily:"var(--m)",fontSize:14,fontWeight:700,color:"#fff"}}>TK</span></div>
<h1 style={{fontFamily:"var(--d)",fontSize:22,fontWeight:800,color:"var(--t1)",marginBottom:4}}>Welcome back</h1>
<p style={{fontSize:13,color:"var(--t2)"}}>Sign in to your Turnkey account</p>
</div>
<div style={{marginBottom:16}}>
<label style={{display:"block",fontFamily:"var(--m)",fontSize:11,fontWeight:600,color:"var(--t3)",letterSpacing:1,marginBottom:6,textTransform:"uppercase"}}>Email</label>
<input type="email" placeholder="you@hotel.com" style={{width:"100%",padding:"10px 12px",background:"var(--s2)",border:"1px solid var(--b)",borderRadius:8,color:"var(--t1)",fontSize:14,fontFamily:"var(--m)",outline:"none",boxSizing:"border-box"}}/>
</div>
<div style={{marginBottom:24}}>
<label style={{display:"block",fontFamily:"var(--m)",fontSize:11,fontWeight:600,color:"var(--t3)",letterSpacing:1,marginBottom:6,textTransform:"uppercase"}}>Password</label>
<input type="password" placeholder="••••••••" style={{width:"100%",padding:"10px 12px",background:"var(--s2)",border:"1px solid var(--b)",borderRadius:8,color:"var(--t1)",fontSize:14,fontFamily:"var(--m)",outline:"none",boxSizing:"border-box"}}/>
</div>
<button onClick={()=>sP("ob")} style={{width:"100%",padding:"12px 0",background:"linear-gradient(135deg,#E85D3A,#FF8C42)",border:"none",borderRadius:8,color:"#fff",fontSize:14,fontWeight:700,fontFamily:"var(--m)",cursor:"pointer",marginBottom:16}}>Sign In</button>
<div style={{textAlign:"center",fontSize:12,color:"var(--t3)"}}>
<span>Don't have an account? </span><span style={{color:"#E85D3A",cursor:"pointer"}} onClick={()=>sP("ob")}>Get started</span>
</div>
<div style={{marginTop:24,paddingTop:20,borderTop:"1px solid var(--b)",textAlign:"center"}}>
<button onClick={()=>sP("ob")} style={{width:"100%",padding:"10px 0",background:"var(--s2)",border:"1px solid var(--b)",borderRadius:8,color:"var(--t1)",fontSize:13,fontWeight:600,fontFamily:"var(--m)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>Continue with SSO</button>
</div>
</div>
</div>}

{/* ONBOARDING */}
  {ph==="ob"&&<div style={{minHeight:"calc(100vh - 44px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
  <div style={{width:"100%",maxWidth:st===1?560:420,animation:"su .3s ease"}}>
  {st===0&&<div style={{textAlign:"center"}}>
    <div style={{width:48,height:48,background:"linear-gradient(135deg,#E85D3A,#FF7F5C)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:800,color:"#fff",fontFamily:"var(--m)",margin:"0 auto 18px",boxShadow:"0 8px 24px rgba(232,93,58,.3)"}}>TK</div>
    <h1 style={{fontFamily:"var(--d)",fontSize:22,fontWeight:800,letterSpacing:-.5,marginBottom:6}}>Welcome to Turnkey</h1>
    <p style={{fontSize:11,color:"var(--t2)",marginBottom:6}}>The complete content engine for hotels.</p>
    <div style={{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",marginBottom:20,maxWidth:340,margin:"0 auto 20px"}}>
      {["Brand Library","Photo Scraping","5 Channels","Approvals","Compliance","Evergreen","Social Inbox","Competitors","CRM","Revenue Attribution","AI/SEO","TikTok"].map(f=><span key={f} style={{fontSize:7,padding:"2px 6px",borderRadius:3,background:"var(--s1)",border:"1px solid var(--b)",color:"var(--t3)",fontFamily:"var(--m)"}}>{f}</span>)}
    </div>
    <button onClick={()=>sS(1)} style={{padding:"10px 28px",background:"linear-gradient(135deg,#E85D3A,#FF7F5C)",border:"none",borderRadius:7,fontFamily:"var(--m)",fontSize:10,fontWeight:700,color:"#fff",cursor:"pointer"}}>Get Started →</button>
  </div>}

  {st===1&&<div>
    <div style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:ax,letterSpacing:2,marginBottom:4}}>STEP 1 OF 3</div>
    <h2 style={{fontFamily:"var(--d)",fontSize:18,fontWeight:800,marginBottom:12}}>Select Brand</h2>
    <div style={{display:"flex",gap:3,marginBottom:12,flexWrap:"wrap"}}>{FM.map(f=><button key={f} onClick={()=>sF(f)} style={{padding:"4px 9px",borderRadius:4,background:ff===f?`${ax}0A`:"var(--s1)",border:`1px solid ${ff===f?ax+"30":"var(--b)"}`,fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:ff===f?ax:"var(--t3)",cursor:"pointer"}}>{f}</button>)}</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5,marginBottom:12}}>
    {B.filter(b=>b.f===ff).map(b=>{const s=bi===b.id;return(
      <button key={b.id} onClick={()=>sB(b.id)} style={{textAlign:"left",background:s?`${b.c[1]}08`:"var(--s1)",border:`1.5px solid ${s?b.c[1]+"50":"var(--b)"}`,borderRadius:8,padding:0,cursor:"pointer",overflow:"hidden"}}>
        <div style={{height:28,background:`linear-gradient(135deg,${b.c[0]},${b.c[1]})`,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:"var(--m)",fontSize:9,fontWeight:800,color:"#fff"}}>{b.l}</span></div>
        <div style={{padding:"6px 8px"}}><div style={{fontFamily:"var(--m)",fontSize:8,fontWeight:700,color:s?b.c[1]:"var(--t1)"}}>{b.n}</div><div style={{fontSize:7,color:"var(--t3)",marginTop:1}}>{b.t}</div><div style={{display:"flex",gap:2,marginTop:3}}>{b.c.map((c,i)=><div key={i} style={{width:8,height:8,borderRadius:2,background:c,border:"1px solid var(--b)"}}/>)}</div></div>
      </button>)})}
    </div>
    <div style={{display:"flex",gap:6,marginTop:14}}><button onClick={()=>sS(0)} style={{padding:"8px 14px",background:"var(--s1)",border:"1px solid var(--b)",borderRadius:5,fontFamily:"var(--m)",fontSize:8,color:"var(--t3)",cursor:"pointer"}}>←</button><button onClick={()=>sS(2)} disabled={!bi} style={{flex:1,padding:"8px",background:!bi?"var(--s2)":`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",borderRadius:5,fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:!bi?"var(--t3)":"#fff",cursor:!bi?"default":"pointer"}}>Continue →</button></div>
  </div>}

  {st===2&&<div>
    <div style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:ax,letterSpacing:2,marginBottom:4}}>STEP 2 OF 3</div>
    <h2 style={{fontFamily:"var(--d)",fontSize:18,fontWeight:800,marginBottom:12}}>Property + Photos</h2>
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <Inp l="Property Name" v={pn} s={sPn} p={bd?.n+" — City"}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}><Inp l="Location" v={pl} s={sPl} p="Lancaster, PA"/><Inp l="Website" v={pu} s={sPu} p="thelindenhotel.com"/></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}><Inp l="Restaurant" v={rs} s={sRs} p="The Linden Table"/><Inp l="Bar" v={br} s={sBr} p="The Rooftop"/></div>
      <Inp l="Current Offer" v={of_} s={sOf} p="20% off Sunday nights"/>
    </div>
    <div style={{marginTop:12}}><div style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:"var(--t3)",letterSpacing:1.5,marginBottom:6}}>PHOTOS</div>
    {!scd&&!scr&&<button onClick={doSc} style={{width:"100%",padding:12,background:"var(--s1)",border:"1.5px dashed var(--b)",borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:16}}>🔍</span><div style={{textAlign:"left"}}><div style={{fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:"var(--t1)"}}>Scan {pu||"website"}</div><div style={{fontSize:8,color:"var(--t3)"}}>Website · Google · Booking · Expedia · TripAdvisor · Instagram</div></div></button>}
    {scr&&<div style={{textAlign:"center",padding:"16px 0"}}><div style={{display:"flex",gap:3,justifyContent:"center",marginBottom:8}}>{[0,1,2,3].map(i=><div key={i} style={{width:5,height:5,borderRadius:"50%",background:ax,animation:`dp 1.2s ${i*.12}s infinite`}}/>)}</div><div style={{fontFamily:"var(--m)",fontSize:9,color:"var(--t2)"}}>Scanning 6 sources...</div></div>}
    {scd&&<div style={{animation:"fi .3s"}}><div style={{fontFamily:"var(--m)",fontSize:8,color:"var(--t1)",marginBottom:4}}>{P.length} photos found</div><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:3}}>{P.map(p=>{const sl=sp.includes(p.id);return(<button key={p.id} onClick={()=>sSp(x=>sl?x.filter(y=>y!==p.id):[...x,p.id])} style={{position:"relative",border:sl?`2px solid ${ax}`:"2px solid transparent",borderRadius:5,overflow:"hidden",cursor:"pointer",aspectRatio:"3/2",padding:0}}><img src={p.u} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:sl?1:.3}}/>{sl&&<div style={{position:"absolute",top:1,right:1,width:10,height:10,borderRadius:2,background:ax,fontSize:6,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>✓</div>}<div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,.6))",padding:"4px 2px 1px"}}><span style={{fontFamily:"var(--m)",fontSize:5,color:"#fff"}}>{p.sr}</span></div></button>)})}</div></div>}
    </div>
    <div style={{display:"flex",gap:6,marginTop:14}}><button onClick={()=>sS(1)} style={{padding:"8px 14px",background:"var(--s1)",border:"1px solid var(--b)",borderRadius:5,fontFamily:"var(--m)",fontSize:8,color:"var(--t3)",cursor:"pointer"}}>←</button><button onClick={()=>sS(3)} disabled={!scd} style={{flex:1,padding:"8px",background:!scd?"var(--s2)":`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",borderRadius:5,fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:!scd?"var(--t3)":"#fff",cursor:!scd?"default":"pointer"}}>Continue →</button></div>
  </div>}

  {st===3&&<div>
    <div style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:ax,letterSpacing:2,marginBottom:4}}>STEP 3 OF 3</div>
    <h2 style={{fontFamily:"var(--d)",fontSize:18,fontWeight:800,marginBottom:12}}>Review & Launch</h2>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5,marginBottom:14}}>
      {[["📸",sp.length+" Photos"],["🎯",bd?.ct?.length+" CTAs"],["📍",EV.length+" Events"],["⭐",RV.length+" Reviews"],["👥",SG.length+" Segments"],["📺","5 Channels"],["✅","Approvals"],["♻️","Evergreen"],["💬","Inbox"]].map(([i,t],idx)=>(
        <div key={idx} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:6,padding:"8px 10px",display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:12}}>{i}</span><span style={{fontFamily:"var(--m)",fontSize:8,fontWeight:600,color:"var(--t1)"}}>{t}</span></div>
      ))}
    </div>
    <div style={{display:"flex",gap:6}}><button onClick={()=>sS(2)} style={{padding:"8px 14px",background:"var(--s1)",border:"1px solid var(--b)",borderRadius:5,fontFamily:"var(--m)",fontSize:8,color:"var(--t3)",cursor:"pointer"}}>←</button><button onClick={()=>sP("app")} style={{flex:1,padding:"10px",background:`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",borderRadius:7,fontFamily:"var(--m)",fontSize:10,fontWeight:700,color:"#fff",cursor:"pointer",boxShadow:`0 4px 16px ${ax}40`}}>Launch Turnkey →</button></div>
  </div>}
  </div></div>}

  {/* ═══ CREATE ═══ */}
  {ph==="app"&&vw==="create"&&<div style={{display:"grid",gridTemplateColumns:"1fr 220px",minHeight:"calc(100vh - 44px)"}}>
    <div style={{padding:16,display:"flex",flexDirection:"column",gap:10}}>
      <div style={{background:"var(--s1)",border:"1.5px solid var(--b)",borderRadius:10,padding:4,display:"flex",gap:4,alignItems:"center"}}>
        <div style={{width:28,height:28,borderRadius:5,background:`${ax}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0,marginLeft:3}}>⚡</div>
        <input ref={r} value={pr} onChange={e=>sPr(e.target.value)} onKeyDown={e=>e.key==="Enter"&&doGn()} placeholder="What to promote? AI handles everything..." style={{flex:1,background:"transparent",border:"none",fontSize:11,color:"var(--t1)",fontFamily:"var(--f)",outline:"none",padding:"7px 0"}}/>
        <button onClick={()=>doGn()} disabled={ld} style={{padding:"7px 14px",background:ld?"var(--s2)":`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",borderRadius:6,fontFamily:"var(--m)",fontSize:8,fontWeight:700,color:ld?"var(--t3)":"#fff",cursor:ld?"default":"pointer",flexShrink:0}}>{ld?"...":"Generate"}</button>
      </div>
      {!gn&&!ld&&<div style={{display:"flex",flexWrap:"wrap",gap:3}}>{QP.map((q,i)=><button key={i} onClick={()=>{sPr(q);doGn(q);}} style={{padding:"4px 10px",background:"var(--s1)",border:"1px solid var(--b)",borderRadius:12,fontSize:9,color:"var(--t2)",cursor:"pointer"}}>{q}</button>)}</div>}
      {pk&&<div style={{display:"flex",gap:3,flexWrap:"wrap",animation:"fi .3s"}}>{[{l:"Brand",v:bd?.n,c:ax},{l:"Photo",v:pk.ph?.lb,c:"#34D399"},{l:"Event",v:pk.ev?.n,c:"#D4A853"},{l:"Segment",v:pk.sg?.n,c:"#5B7FD6"}].map((c,i)=><div key={i} style={{padding:"3px 7px",background:"var(--s1)",border:"1px solid var(--b)",borderRadius:3,display:"flex",alignItems:"center",gap:2}}><span style={{width:3,height:3,borderRadius:"50%",background:c.c}}/><span style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)"}}>{c.l}:</span><span style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:"var(--t1)"}}>{c.v}</span></div>)}</div>}
      {ld&&!gn&&<div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8}}><div style={{display:"flex",gap:3}}>{[0,1,2,3].map(i=><div key={i} style={{width:5,height:5,borderRadius:"50%",background:ax,animation:`dp 1.2s ${i*.12}s infinite`}}/>)}</div><div style={{fontFamily:"var(--m)",fontSize:9,color:"var(--t2)"}}>Generating 5 channels...</div></div>}
      {gn&&<>
        <div style={{display:"flex",gap:1,background:"var(--s1)",borderRadius:6,padding:2,border:"1px solid var(--b)"}}>{CH.map(c=>{const a_=ac_===c.id,h=!!gn[c.id];return <button key={c.id} onClick={()=>sAc(c.id)} style={{flex:1,padding:"7px 2px",border:"none",borderRadius:4,background:a_?"var(--bg)":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:3,position:"relative"}}>{a_&&<div style={{position:"absolute",bottom:-2,left:"50%",transform:"translateX(-50%)",width:10,height:2,borderRadius:1,background:c.c}}/>}<span style={{width:4,height:4,borderRadius:"50%",background:h?c.c:"var(--b)"}}/><span style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:a_?"var(--t1)":"var(--t3)"}}>{c.a}</span></button>})}</div>
        {cn&&<div style={{flex:1,background:"var(--s1)",border:"1px solid var(--b)",borderRadius:9,overflow:"hidden",display:"flex",flexDirection:"column",animation:"fi .3s"}}>
          <div style={{height:120,position:"relative",overflow:"hidden",borderBottom:"1px solid var(--b)"}}><img src={pk?.ph?.u||P[0].u} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/><div style={{position:"absolute",inset:0,background:`linear-gradient(0deg,${bd?.c[0]||"#111"}CC 0%,transparent 60%)`}}><div style={{position:"absolute",bottom:10,left:12}}><div style={{fontFamily:"var(--d)",fontSize:12,fontWeight:800,color:"#fff",textTransform:"uppercase"}}>{of_||bd?.n}</div><div style={{fontFamily:"var(--m)",fontSize:6,color:ax,marginTop:3,letterSpacing:2}}>{bd?.ct?.[0]} · {pn}</div></div></div>
            {cn.seo&&<div style={{position:"absolute",top:5,left:5,padding:"1px 5px",borderRadius:2,background:"rgba(139,92,246,.2)",fontFamily:"var(--m)",fontSize:5,fontWeight:600,color:"#8B5CF6"}}>AI Optimized</div>}
            {cn.sg&&ac_==="email"&&<div style={{position:"absolute",top:5,left:5,padding:"1px 5px",borderRadius:2,background:"rgba(91,127,214,.15)",fontFamily:"var(--m)",fontSize:5,fontWeight:600,color:"#5B7FD6"}}>CRM: {cn.sg}</div>}
            {ac_==="tiktok"&&<div style={{position:"absolute",top:5,left:5,padding:"1px 5px",borderRadius:2,background:"rgba(0,242,234,.15)",fontFamily:"var(--m)",fontSize:5,fontWeight:600,color:"#00F2EA"}}>9:16 · 15s</div>}
          </div>
          <div style={{padding:"6px 12px",borderBottom:"1px solid var(--b)",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:4}}><span style={{width:5,height:5,borderRadius:"50%",background:ch_.c}}/><span style={{fontFamily:"var(--m)",fontSize:8,fontWeight:700,color:"var(--t1)"}}>{ch_.lb}</span></div><div style={{display:"flex",gap:2}}>{["Edit","Copy","Regen"].map(a=><button key={a} style={{padding:"2px 6px",borderRadius:3,background:"var(--bg)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",cursor:"pointer"}}>{a}</button>)}</div></div>
          <div style={{padding:12,flex:1,overflowY:"auto"}}>{cn.hl&&<h3 style={{fontFamily:"var(--d)",fontSize:12,fontWeight:800,marginBottom:6,lineHeight:1.3}}>{cn.hl}</h3>}<div style={{fontSize:ac_==="tiktok"?9:10,color:"var(--t2)",lineHeight:1.8,whiteSpace:"pre-wrap",fontFamily:ac_==="tiktok"?"var(--m)":"var(--f)"}}>{cn.bd}</div></div>
          <div style={{padding:"5px 12px",borderTop:"1px solid var(--b)",background:"rgba(52,211,153,.03)",display:"flex",alignItems:"center",gap:4}}><span style={{width:4,height:4,borderRadius:"50%",background:"#34D399"}}/><span style={{fontFamily:"var(--m)",fontSize:6,color:"#34D399"}}>Compliance passed</span><span style={{fontSize:6,color:"var(--t3)"}}>· CTAs verified · No flagged terms</span></div>
          <div style={{padding:"6px 12px",borderTop:"1px solid var(--b)",display:"flex",justifyContent:"space-between",alignItems:"center"}}><button style={{padding:"5px 12px",background:ch_.c,border:"none",borderRadius:4,fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:"#fff",cursor:"pointer"}}>{cn.ct}</button><button style={{padding:"3px 8px",borderRadius:3,background:"var(--s2)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",cursor:"pointer"}}>Submit for Approval</button></div>
        </div>}
        <div style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:7,padding:"7px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontFamily:"var(--m)",fontSize:8,color:"var(--t2)"}}>{Object.keys(gn).length}/5</span><div style={{display:"flex",gap:3}}><button style={{padding:"5px 10px",borderRadius:5,background:"var(--bg)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",cursor:"pointer"}}>Schedule</button><button style={{padding:"5px 12px",borderRadius:5,background:`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:"#fff",cursor:"pointer"}}>Publish All →</button></div></div>
      </>}
      {!gn&&!ld&&<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",opacity:.2}}><div style={{textAlign:"center"}}><div style={{fontSize:32}}>⚡</div><div style={{fontFamily:"var(--m)",fontSize:9,marginTop:4}}>Type a prompt</div></div></div>}
    </div>
    {/* SIDEBAR */}
    <div style={{borderLeft:"1px solid var(--b)",padding:10,overflowY:"auto",display:"flex",flexDirection:"column",gap:8}}>
      <Sb l="🔔 Events">{EV.map(e=><div key={e.id} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:"1px solid var(--b)"}}><div><div style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:e.h?ax:"var(--t1)"}}>{e.h?"🔥":""}{e.n}</div><div style={{fontSize:6,color:"var(--t3)"}}>{e.d}</div></div><button onClick={()=>{sPr(e.n);doGn(e.n);}} style={{padding:"1px 5px",borderRadius:2,background:`${ax}08`,border:`1px solid ${ax}15`,fontFamily:"var(--m)",fontSize:5,color:ax,cursor:"pointer"}}>Use</button></div>)}</Sb>
      <Sb l="⭐ Reviews">{RV.slice(0,2).map(r=><div key={r.id} style={{padding:"4px 0",borderBottom:"1px solid var(--b)"}}><div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t1)"}}>{r.g} · {r.s}</div><div style={{fontSize:7,color:"var(--t2)",fontStyle:"italic",marginTop:1}}>"{r.t.slice(0,50)}…"</div><button onClick={()=>{sPr("Review: "+r.t.slice(0,25));doGn("Spotlight: "+r.t);}} style={{marginTop:2,padding:"1px 5px",borderRadius:2,background:"var(--s2)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:5,color:"var(--t3)",cursor:"pointer"}}>→ Post</button></div>)}</Sb>
      <Sb l="👥 CRM">{SG.slice(0,3).map(s=><div key={s.id} style={{display:"flex",alignItems:"center",gap:4,padding:"3px 0",borderBottom:"1px solid var(--b)"}}><span style={{width:3,height:3,borderRadius:"50%",background:s.c}}/><span style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t1)",flex:1}}>{s.n}</span><button onClick={()=>{sPr(`Email: ${s.n}`);doGn(`Email: ${s.n}`);}} style={{padding:"1px 4px",borderRadius:2,background:`${s.c}0A`,fontFamily:"var(--m)",fontSize:5,color:s.c,cursor:"pointer",border:`1px solid ${s.c}15`}}>Target</button></div>)}</Sb>
      <Sb l="🏁 Competitors">{CP.map((c,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"1px solid var(--b)"}}><span style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t1)"}}>{c.n}</span><span style={{fontFamily:"var(--m)",fontSize:6,color:c.tr.includes("↑")?"#34D399":"#E84848"}}>{c.e} {c.tr}</span></div>)}</Sb>
      <Sb l="♻️ Evergreen">{EG.map((e,i)=><div key={i} style={{padding:"3px 0",borderBottom:"1px solid var(--b)"}}><div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t1)"}}>{e.ti}</div><div style={{fontSize:5,color:"var(--t3)"}}>{e.eg} eng · ♻{e.rc}x · Next: {e.nx}</div></div>)}</Sb>
      <Sb l="⏰ Best Times">{Object.entries(BT).map(([k,v])=><div key={k} style={{fontFamily:"var(--m)",fontSize:6,padding:"2px 0"}}><span style={{color:"var(--t1)"}}>{k}:</span> <span style={{color:"#34D399"}}>{v}</span></div>)}</Sb>
    </div>
  </div>}

  {/* ═══ CALENDAR ═══ */}
  {ph==="app"&&vw==="calendar"&&<div style={{display:"grid",gridTemplateColumns:"1fr 220px",minHeight:"calc(100vh - 44px)"}}>
    <div style={{padding:16}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800}}>March 2026</h2><div style={{display:"flex",gap:4,alignItems:"center"}}><button onClick={doAutoFill} disabled={autoFilling} style={{padding:"5px 12px",borderRadius:5,background:autoFilling?"var(--s2)":`linear-gradient(135deg,${ax},${ax}CC)`,border:"none",fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:autoFilling?"var(--t3)":"#fff",cursor:autoFilling?"default":"pointer"}}>{autoFilling?"Filling...":"✨ AI Auto-Fill Month"}</button><div style={{display:"flex",gap:2}}>{Object.entries(sc).map(([s,c])=><div key={s} style={{display:"flex",alignItems:"center",gap:2,padding:"1px 4px",background:"var(--s1)",borderRadius:2,border:"1px solid var(--b)"}}><span style={{width:3,height:3,borderRadius:"50%",background:c}}/><span style={{fontFamily:"var(--m)",fontSize:5,color:"var(--t3)"}}>{s}</span></div>)}</div></div></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:2}}>{["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=><div key={d} style={{textAlign:"center",fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",padding:2}}>{d}</div>)}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>{Array.from({length:31}).map((_,i)=>{const d=i+1,ps=calPosts.filter(p=>p.d===d),iT=d===20,sl=cs===d;return <button key={d} onClick={()=>sCs(d)} style={{aspectRatio:"1",borderRadius:5,border:sl?`1.5px solid ${ax}`:iT?`1.5px solid ${ax}30`:`1px solid ${ps.length?"var(--b)":"transparent"}`,background:sl?`${ax}06`:ps.length?"var(--s1)":"transparent",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1}}><span style={{fontFamily:"var(--m)",fontSize:8,fontWeight:iT?700:400,color:iT?ax:d<20?"var(--t3)":"var(--t1)"}}>{d}</span>{ps.length>0&&<div style={{display:"flex",gap:1}}>{ps.map(p=><span key={p.id} style={{width:3,height:3,borderRadius:"50%",background:sc[p.s]}}/>)}</div>}</button>})}</div>
      {autoFilling&&<div style={{marginTop:8,fontFamily:"var(--m)",fontSize:8,color:ax,textAlign:"center",animation:"fi .3s"}}>✨ AI is analyzing events, seasonality, and performance to fill your month...</div>}
    </div>
    <div style={{borderLeft:"1px solid var(--b)",padding:10,overflowY:"auto"}}><div style={{fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",marginBottom:8}}>March {cs} · {calPosts.filter(p=>p.d===cs).length} posts</div>
    {calPosts.filter(p=>p.d===cs).length===0?<div style={{textAlign:"center",padding:16,color:"var(--t3)",fontSize:8}}>No posts</div>:calPosts.filter(p=>p.d===cs).map(p=>(
      <div key={p.id} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:6,padding:8,marginBottom:6}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontFamily:"var(--m)",fontSize:8,fontWeight:700,color:"var(--t1)"}}>{p.t}</span><span style={{fontFamily:"var(--m)",fontSize:6,color:sc[p.s]}}>{p.s}{p.tm?` · ${p.tm}`:""}</span></div>
        <div style={{display:"flex",gap:2,marginBottom:3}}>{p.ch.map(c=>{const x=CH.find(z=>z.id===c);return <span key={c} style={{padding:"1px 3px",borderRadius:2,background:`${x.c}12`,fontFamily:"var(--m)",fontSize:5,color:x.c}}>{x.a}</span>})}</div>
        {p.ev&&<div style={{fontFamily:"var(--m)",fontSize:6,color:"#D4A853"}}>📍 {p.ev}</div>}
        {p.rv&&<div style={{fontFamily:"var(--m)",fontSize:7,color:"#34D399",fontWeight:600}}>{p.bk} bookings · ${p.rv}</div>}
      </div>
    ))}</div>
  </div>}

  {/* ═══ INBOX ═══ */}
  {ph==="app"&&vw==="inbox"&&<div style={{padding:16,maxWidth:640,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800}}>Social Inbox</h2><div style={{display:"flex",gap:2}}>{["all","unreplied","negative"].map(f=><button key={f} onClick={()=>sIf(f)} style={{padding:"3px 8px",borderRadius:3,background:if_===f?`${ax}08`:"var(--s1)",border:`1px solid ${if_===f?ax+"20":"var(--b)"}`,fontFamily:"var(--m)",fontSize:7,color:if_===f?ax:"var(--t3)",cursor:"pointer"}}>{f}</button>)}</div></div>
    {ib.filter(m=>if_==="all"||if_==="unreplied"&&!m.re||if_==="negative"&&m.se==="negative").map(m=>{const cx=CH.find(c=>c.id===m.ch);return(
      <div key={m.id} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:8,padding:12,marginBottom:6}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><div style={{display:"flex",alignItems:"center",gap:4}}><span style={{width:5,height:5,borderRadius:"50%",background:cx?.c}}/><span style={{fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:"var(--t1)"}}>{m.fr}</span><span style={{padding:"1px 4px",borderRadius:2,background:`${se[m.se]}12`,fontFamily:"var(--m)",fontSize:6,color:se[m.se]}}>{m.se}</span></div><span style={{fontSize:7,color:"var(--t3)"}}>{m.tm}</span></div>
        <div style={{fontSize:10,color:"var(--t2)",marginBottom:6,lineHeight:1.5}}>{m.m}</div>
        {m.re?<div style={{padding:"6px 8px",background:"var(--s2)",borderRadius:5,borderLeft:`2px solid ${ax}`,fontSize:9,color:"var(--t1)"}}>{m.rp}</div>:rt===m.id?<div style={{display:"flex",gap:4}}><input value={rx} onChange={e=>sRx(e.target.value)} placeholder="Reply..." style={{flex:1,background:"var(--s2)",border:"1px solid var(--b)",borderRadius:5,padding:"6px 8px",fontSize:9,color:"var(--t1)",fontFamily:"var(--f)",outline:"none"}} autoFocus onKeyDown={e=>e.key==="Enter"&&sRp(m.id)}/><button onClick={()=>sRp(m.id)} style={{padding:"6px 10px",background:ax,border:"none",borderRadius:5,fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:"#fff",cursor:"pointer"}}>Send</button></div>:<div style={{display:"flex",gap:3}}><button onClick={()=>{sRt(m.id);sRx("");}} style={{padding:"4px 8px",background:"var(--s2)",border:"1px solid var(--b)",borderRadius:4,fontFamily:"var(--m)",fontSize:7,color:"var(--t2)",cursor:"pointer"}}>Reply</button><button onClick={()=>{sRt(m.id);sRx(m.se==="negative"?"We're sorry — we'd love to make it right. Could you DM us?":"Thanks so much! Check the link in bio for details.");}} style={{padding:"4px 8px",background:`${ax}08`,border:`1px solid ${ax}18`,borderRadius:4,fontFamily:"var(--m)",fontSize:7,color:ax,cursor:"pointer"}}>✨ AI Suggest</button></div>}
      </div>
    )})}
  </div>}

  {/* ═══ COMPLIANCE ═══ */}
  {ph==="app"&&vw==="compliance"&&<div style={{padding:16,maxWidth:640,margin:"0 auto"}}>
    <h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800,marginBottom:4}}>Approval Queue</h2>
    <p style={{fontSize:9,color:"var(--t3)",marginBottom:12}}>Draft → Review → Compliance → Approve → Publish</p>
    <div style={{display:"flex",gap:4,marginBottom:12}}>{[["review","#D4A853","Review"],["flagged","#E84848","Flagged"],["approved","#34D399","Approved"]].map(([s,c,l])=>{const ct=aq.filter(a=>a.st===s).length;return <div key={s} style={{flex:1,background:"var(--s1)",border:"1px solid var(--b)",borderRadius:6,padding:"8px 10px",textAlign:"center"}}><div style={{fontFamily:"var(--d)",fontSize:16,fontWeight:800,color:c}}>{ct}</div><div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)"}}>{l}</div></div>})}</div>
    {aq.map(a=>{const stc={review:"#D4A853",flagged:"#E84848",approved:"#34D399",rejected:"var(--t3)"};return(
      <div key={a.id} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:7,padding:12,marginBottom:6}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontFamily:"var(--m)",fontSize:10,fontWeight:700}}>{a.ti}</span><span style={{padding:"1px 6px",borderRadius:3,background:`${stc[a.st]}12`,fontFamily:"var(--m)",fontSize:6,color:stc[a.st]}}>{a.st}</span></div>
        <div style={{fontSize:8,color:"var(--t3)",marginBottom:4}}>{a.au} · {a.cr}</div>
        <div style={{display:"flex",gap:2,marginBottom:4}}>{a.chs.map(c=>{const x=CH.find(z=>z.id===c);return <span key={c} style={{padding:"1px 4px",borderRadius:2,background:`${x.c}12`,fontFamily:"var(--m)",fontSize:6,color:x.c}}>{x.a}</span>})}</div>
        {a.fl.map((f,i)=><div key={i} style={{padding:"3px 6px",background:"rgba(232,72,72,.06)",border:"1px solid rgba(232,72,72,.12)",borderRadius:3,fontFamily:"var(--m)",fontSize:7,color:"#E84848",marginBottom:3}}>⚠ {f}</div>)}
        {(a.st==="review"||a.st==="flagged")&&<div style={{display:"flex",gap:3,marginTop:6,justifyContent:"flex-end"}}><button onClick={()=>sAq(q=>q.map(x=>x.id===a.id?{...x,st:"rejected"}:x))} style={{padding:"4px 10px",borderRadius:4,background:"var(--s2)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",cursor:"pointer"}}>Reject</button><button onClick={()=>sAq(q=>q.map(x=>x.id===a.id?{...x,st:"approved",fl:[]}:x))} style={{padding:"4px 12px",borderRadius:4,background:"#34D399",border:"none",fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:"#fff",cursor:"pointer"}}>Approve ✓</button></div>}
      </div>
    )})}
    <div style={{marginTop:12,background:"var(--s1)",border:"1px solid var(--b)",borderRadius:7,padding:12}}>
      <div style={{fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",letterSpacing:1.5,marginBottom:8}}>AUDIT TRAIL</div>
      {[{t:"Wedding approved by Regional (Sarah)",d:"Mar 17 2:14PM",c:"#34D399"},{t:"Wine Wed flagged: 'cheap' detected",d:"Mar 18 9:22AM",c:"#E84848"},{t:"Music Fest auto-generated by AI",d:"Mar 20 8:00AM",c:"#D4A853"},{t:"Spring Promo submitted by Amy",d:"Mar 19 3:45PM",c:"#5B7FD6"}].map((e,i)=><div key={i} style={{display:"flex",gap:6,padding:"4px 0",borderBottom:i<3?"1px solid var(--b)":"none"}}><span style={{width:4,height:4,borderRadius:"50%",background:e.c,marginTop:3,flexShrink:0}}/><div><div style={{fontSize:8,color:"var(--t1)"}}>{e.t}</div><div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)"}}>{e.d}</div></div></div>)}
    </div>
  </div>}

  {/* ═══ REVIEWS AI ═══ */}
  {ph==="app"&&vw==="reviews"&&<div style={{padding:16,maxWidth:640,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><div><h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800}}>Review Response AI</h2><p style={{fontSize:9,color:"var(--t3)",marginTop:2}}>AI drafts brand-voice responses · You approve + send</p></div><div style={{display:"flex",gap:6,alignItems:"center"}}><div style={{textAlign:"center"}}><div style={{fontFamily:"var(--d)",fontSize:16,fontWeight:800,color:"#34D399"}}>{rvq.filter(r=>r.responded).length}</div><div style={{fontSize:6,color:"var(--t3)"}}>Responded</div></div><div style={{textAlign:"center"}}><div style={{fontFamily:"var(--d)",fontSize:16,fontWeight:800,color:"#D4A853"}}>{rvq.filter(r=>!r.responded).length}</div><div style={{fontSize:6,color:"var(--t3)"}}>Pending</div></div></div></div>
    {rvq.map(rv=>{const starC=rv.stars>=4?"#34D399":rv.stars>=3?"#D4A853":"#E84848";return(
      <div key={rv.id} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:8,padding:12,marginBottom:8}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:"var(--t1)"}}>{rv.guest}</span><span style={{fontSize:7,color:"var(--t3)"}}>{rv.src}</span><span style={{fontFamily:"var(--m)",fontSize:8,color:starC}}>{"★".repeat(rv.stars)}{"☆".repeat(5-rv.stars)}</span></div><div style={{display:"flex",alignItems:"center",gap:4}}><span style={{fontSize:7,color:"var(--t3)"}}>{rv.dt}</span>{rv.responded&&<span style={{padding:"1px 6px",borderRadius:3,background:"rgba(52,211,153,.1)",fontFamily:"var(--m)",fontSize:6,color:"#34D399"}}>✓ Sent</span>}</div></div>
        <div style={{fontSize:10,color:"var(--t2)",lineHeight:1.5,marginBottom:8,padding:"6px 8px",background:"var(--bg)",borderRadius:5,borderLeft:`2px solid ${starC}`}}>"{rv.txt}"</div>
        {!rv.responded&&rv.aiDraft&&<><div style={{fontFamily:"var(--m)",fontSize:7,color:ax,marginBottom:4}}>✨ AI Draft Response:</div><div style={{fontSize:9,color:"var(--t1)",lineHeight:1.6,padding:"8px 10px",background:"var(--s2)",borderRadius:6,borderLeft:`2px solid ${ax}`,marginBottom:8}}>{rv.aiDraft}</div><div style={{display:"flex",gap:3,justifyContent:"flex-end"}}><button style={{padding:"4px 10px",borderRadius:4,background:"var(--s2)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",cursor:"pointer"}}>Edit</button><button style={{padding:"4px 10px",borderRadius:4,background:"var(--s2)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",cursor:"pointer"}}>Regenerate</button><button onClick={()=>approveReview(rv.id)} style={{padding:"4px 14px",borderRadius:4,background:"#34D399",border:"none",fontFamily:"var(--m)",fontSize:7,fontWeight:700,color:"#fff",cursor:"pointer"}}>Send Response ✓</button></div></>}
      </div>
    )})}
  </div>}

  {/* ═══ PORTFOLIO ═══ */}
  {ph==="app"&&vw==="portfolio"&&<div style={{padding:16,maxWidth:800,margin:"0 auto"}}>
    <h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800,marginBottom:4}}>Portfolio Overview</h2>
    <p style={{fontSize:9,color:"var(--t3)",marginBottom:16}}>All properties at a glance · Comparative performance</p>
    {/* Summary row */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginBottom:16}}>
      {[{v:"105",l:"Total Posts",c:"var(--t1)"},{v:"$46.6K",l:"Total Revenue",c:"#34D399"},{v:"103",l:"Total Bookings",c:ax},{v:"24.5K",l:"Total Eng.",c:"#5B7FD6"}].map((s,i)=><div key={i} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:7,padding:"12px 10px",textAlign:"center"}}><div style={{fontFamily:"var(--d)",fontSize:18,fontWeight:800,color:s.c}}>{s.v}</div><div style={{fontSize:7,color:"var(--t3)",marginTop:2}}>{s.l}</div></div>)}
    </div>
    {/* Property cards */}
    {PORTFOLIO.map(p=>(
      <div key={p.id} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:9,padding:16,marginBottom:8,display:"flex",gap:16,alignItems:"center"}}>
        <div style={{width:44,height:44,borderRadius:8,background:`linear-gradient(135deg,#1A1A2E,${p.color})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--m)",fontSize:10,fontWeight:800,color:"#fff",flexShrink:0}}>{p.nm.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}><div><div style={{fontFamily:"var(--m)",fontSize:11,fontWeight:700,color:"var(--t1)"}}>{p.nm}</div><div style={{fontSize:8,color:"var(--t3)"}}>{p.loc} · {p.brand}</div></div><div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:32,height:32,borderRadius:"50%",border:`2px solid ${p.health>80?"#34D399":p.health>60?"#D4A853":"#E84848"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:p.health>80?"#34D399":p.health>60?"#D4A853":"#E84848"}}>{p.health}</div></div></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginTop:6}}>
            {[{v:p.posts,l:"Posts"},{v:p.eng,l:"Eng."},{v:p.bk,l:"Bookings"},{v:p.rev,l:"Revenue"}].map((m,i)=><div key={i}><div style={{fontFamily:"var(--m)",fontSize:10,fontWeight:700,color:"var(--t1)"}}>{m.v}</div><div style={{fontSize:6,color:"var(--t3)"}}>{m.l}</div></div>)}
          </div>
          {/* Health bar */}
          <div style={{marginTop:8,height:3,background:"var(--b)",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:`${p.health}%`,background:p.health>80?"#34D399":p.health>60?"#D4A853":"#E84848",borderRadius:2}}/></div>
        </div>
        <div style={{fontFamily:"var(--m)",fontSize:10,fontWeight:600,color:p.trend.includes("↑")?"#34D399":"#E84848",flexShrink:0}}>{p.trend}</div>
      </div>
    ))}
    {/* Comparison chart */}
    <div style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:9,padding:14,marginTop:12}}>
      <div style={{fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",letterSpacing:1.5,marginBottom:10}}>ENGAGEMENT COMPARISON</div>
      <div style={{display:"flex",alignItems:"flex-end",gap:12,height:80}}>
        {PORTFOLIO.map(p=>{const val=parseFloat(p.eng)*1000;const max=18200;return(
          <div key={p.id} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
            <span style={{fontFamily:"var(--m)",fontSize:7,fontWeight:600,color:"var(--t1)"}}>{p.eng}</span>
            <div style={{width:"100%",background:`linear-gradient(180deg,${p.color},${p.color}50)`,borderRadius:"3px 3px 0 0",height:`${(val/max)*100}%`,minHeight:4}}/>
            <span style={{fontFamily:"var(--m)",fontSize:5,color:"var(--t3)",textAlign:"center"}}>{p.nm.split(" ").slice(1,3).join(" ")}</span>
          </div>
        )})}
      </div>
    </div>
  </div>}

  {/* ═══ ANALYTICS ═══ */}
  {ph==="app"&&vw==="analytics"&&<div style={{padding:16,maxWidth:760,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 style={{fontFamily:"var(--d)",fontSize:14,fontWeight:800}}>{pn||bd?.n} Performance</h2><button style={{padding:"4px 10px",borderRadius:4,background:"var(--s1)",border:"1px solid var(--b)",fontFamily:"var(--m)",fontSize:7,color:"var(--t3)",cursor:"pointer"}}>📄 White-Label Report</button></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:5,marginBottom:12}}>
      {[{v:"30",l:"Posts",t:"↑18%",c:"var(--t1)"},{v:"7.8K",l:"Eng.",t:"↑34%",c:"#34D399"},{v:"602",l:"Clicks",t:"↑28%",c:"#5B7FD6"},{v:"32",l:"Bookings",t:"↑42%",c:ax},{v:"$14.5K",l:"Revenue",t:"↑51%",c:"#D4A853"}].map((s,i)=><div key={i} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:7,padding:"10px 8px"}}><div style={{fontFamily:"var(--d)",fontSize:16,fontWeight:800,color:s.c}}>{s.v}</div><div style={{fontSize:7,color:"var(--t3)",marginTop:1}}>{s.l}</div><div style={{fontFamily:"var(--m)",fontSize:7,color:s.c,marginTop:2}}>{s.t}</div></div>)}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
      {[{l:"Engagement",d:WK.map(w=>w.e),c:"#34D399"},{l:"Revenue",d:WK.map(w=>w.r),c:ax,p:"$"}].map(ch=>{const mx=Math.max(...ch.d);return <div key={ch.l} style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:8,padding:12}}><div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",letterSpacing:1.5,marginBottom:8}}>{ch.l.toUpperCase()}</div><div style={{display:"flex",alignItems:"flex-end",gap:6,height:70}}>{ch.d.map((v,i)=><div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}><span style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t1)"}}>{ch.p||""}{(v/1000).toFixed(1)}K</span><div style={{width:"100%",background:`linear-gradient(180deg,${ch.c},${ch.c}50)`,borderRadius:"2px 2px 0 0",height:`${(v/mx)*100}%`,minHeight:3}}/></div>)}</div></div>})}
    </div>
    <div style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:8,padding:12,marginBottom:12}}>
      <div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",letterSpacing:1.5,marginBottom:6}}>TOP POSTS BY REVENUE</div>
      {CL.filter(p=>p.rv).sort((a,b)=>b.rv-a.rv).map(p=><div key={p.id} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:"1px solid var(--b)"}}><div><div style={{fontFamily:"var(--m)",fontSize:8,color:"var(--t1)"}}>{p.t}</div><div style={{display:"flex",gap:1,marginTop:1}}>{p.ch.map(c=>{const x=CH.find(z=>z.id===c);return <span key={c} style={{width:3,height:3,borderRadius:"50%",background:x?.c}}/>;})}</div></div><div style={{textAlign:"right"}}><div style={{fontFamily:"var(--m)",fontSize:9,fontWeight:700,color:"#34D399"}}>${p.rv}</div><div style={{fontSize:6,color:"var(--t3)"}}>{p.bk} bookings</div></div></div>)}
    </div>
    <div style={{background:"var(--s1)",border:"1px solid var(--b)",borderRadius:8,padding:12}}>
      <div style={{fontFamily:"var(--m)",fontSize:6,color:"var(--t3)",letterSpacing:1.5,marginBottom:6}}>COMPETITOR BENCHMARK</div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:"1px solid var(--b)"}}><span style={{fontFamily:"var(--m)",fontSize:8,fontWeight:700,color:ax}}>{pn||bd?.n} (You)</span><span style={{fontFamily:"var(--m)",fontSize:8,color:"#34D399"}}>7.8K ↑34%</span></div>
      {CP.map((c,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:"1px solid var(--b)"}}><span style={{fontFamily:"var(--m)",fontSize:7,color:"var(--t2)"}}>{c.n}</span><span style={{fontFamily:"var(--m)",fontSize:7,color:c.tr.includes("↑")?"#34D399":"#E84848"}}>{c.e} {c.tr}</span></div>)}
    </div>
  </div>}

  </div></>);
}

function Inp({l,v,s,p}){return <div><label style={{fontFamily:"var(--m)",fontSize:6,fontWeight:600,color:"var(--t3)",letterSpacing:1.5,display:"block",marginBottom:3}}>{l}</label><input value={v} onChange={e=>s(e.target.value)} placeholder={p} style={{width:"100%",background:"var(--s1)",border:"1.5px solid var(--b)",borderRadius:5,padding:"7px 9px",fontSize:10,color:"var(--t1)",fontFamily:"var(--f)",outline:"none",boxSizing:"border-box"}}/></div>}
function Sb({l,children}){return <div><div style={{fontFamily:"var(--m)",fontSize:6,fontWeight:700,color:"var(--t3)",letterSpacing:1.5,marginBottom:5}}>{l}</div>{children}</div>}
