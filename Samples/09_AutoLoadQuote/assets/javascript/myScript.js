var arrayimgs = ['dl77-1418.jpg','dl87-7129.jpg','dl88-6104.jpg','dl89-1653.jpg','dl90-4859.jpg','dl91-5583.jpg','dl93-8217.jpg','dl94-8472.jpg','dl95-8241.jpg','dl96-9156.jpg','dl97-3020.jpg','dl98-2898.jpg','dl99-3859.jpg','dl100-8412.jpg','dl101-2786.jpg','dl102-2198.jpg','dl103-3118.jpg','dl104-7401.jpg','dl105-0903.jpg','dl106-6220.jpg','dl107-7623.jpg','dl108-4566.jpg','dl109-6349.jpg','dl110-0751.jpg','dl111-4082.jpg','dl112-8116.jpg','dl113-9474.jpg','dl114-1733.jpg','dl115-9278.jpg','dl116-8393.jpg','dl117-7680.jpg','dl118-2894.jpg','logo2-3151.jpg','logo2-7500.jpg','logo-0546.jpg','logo-0973.jpg','logo-1100.jpg','logo-1663.jpg','logo-1821.jpg','logo-3122.jpg','logo-3445.jpg','logo-3510.jpg','logo-3614.jpg','logo-4324.jpg','logo-4587.jpg','logo-5007.jpg','logo-5262.jpg','logo-5887.jpg','logo-6315.jpg','logo-7214.jpg','logo-7257.jpg','logo-7314.jpg','logo-7479.jpg','logo-7552.jpg','logo-7679.jpg','logo-7679-17370.jpg','logo-7679-copy-1947.jpg','logo-7679-copy-2676.jpg','logo-7679-copy-3009.jpg','logo-7679-copy-7794.jpg','logo-7728.jpg','logo-8051.jpg','logo-8699.jpg','logo-copy-0003.jpg','logo-copy-0755.jpg','logo-copy-1122.jpg','logo-copy-2025.jpg','logo-copy-4077.jpg','logo-copy-4251.jpg','logo-copy-7420.jpg','logo-copy-9100.jpg','mockup-5523.jpg','mockup-5955.jpg','mockup-8072.jpg','mockup-8510.jpg','pc-5632.jpg','phoi-canh_dung-0996.jpg','phoi-canh_dung-1633.jpg','phoi-canh_dung-2070.jpg','phoi-canh_dung-2628.jpg','phoi-canh_dung-2965.jpg','phoi-canh_dung-5005.jpg','phoi-canh_dung-5299.jpg','phoi-canh_dung-5604.jpg','phoi-canh_dung-6519.jpg','phoi-canh_dung-7372.jpg','phoi-canh_dung-8107.jpg','phoi-canh_dung-8253.jpg','phoi-canh_dung-8498.jpg','phoi-canh_dung-9624.jpg','phoi-canh_dung-9878.jpg','phoi-canh_ngang-1319.jpg','phoi-canh_ngang-5656.jpg','phoi-canh_ngang-5681.jpg','phối-cảnh_ngang-7012.jpg','phoi-canh_ngang-9518.jpg','phoi-canh-0414.jpg','phoi-canh-1116.jpg','phoi-canh-1365.jpg','phoi-canh-2422.jpg','phoi-canh-2684.jpg','phoi-canh-3233.jpg','phoi-canh-4745.jpg','phoi-canh-4905.jpg','phoi-canh-5974.jpg','phoi-canh-6272.jpg','phoi-canh-7739.jpg','phoi-canh-8666.jpg','Thumbs.db','untitled-1-2284.jpg'];

random_img();

function random_img(){
    rand_img = getRandomInt(arrayimgs.length);    
    position_img = Math.round(rand_img);    
    name_img = arrayimgs[position_img];    
    $("img").attr('src','assets/images/Quotes/'+name_img);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$('button').click(function(){
    random_img();
})


