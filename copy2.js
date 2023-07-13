for (let i = 0; i < HI_text1.length - 1; i++) {
    HI_sub_content = ""
    HI_stop = false;
    HI_start = i;
    HI_finish = i;
    while (HI_stop == false && i != HI_text1.length - 1) {
        if (HI_text1[i].length > HI_radius) {
            HI_stop = true;
            HI_finish = i;
        } else {
            HI_finish = HI_text1.length - 2
        }
        i += 1
    }
    i=HI_finish

    if (HI_start < HI_finish) {
        for (let j = HI_start; j < HI_finish; j++) {
            HI_sub_content += HI_text1[j]
            HI_sub_content += '#acab34'
        }
        HI_sub_content += HI_text1[HI_finish].substring(0, HI_radius + 1)
        console.log("egy)")
        console.log(HI_sub_content)
        console.log(HI_start, HI_finish)
    } else {
        HI_sub_content += HI_text1[i].substring(HI_text1[i].length - HI_radius, HI_text1[i].length + 1)
        HI_sub_content += '#acab34'
        HI_sub_content += HI_text1[i + 1].substring(0, HI_radius + 1)
        console.log("kettő")
    }





    HI_sub_content = clearing_content_from_unclosed_tag(HI_sub_content)

    HI_sub_content += `<br>`
    HI_sub_content += `<p>-----------------------</p>`
    HI_content += HI_sub_content
    console.log(HI_sub_content)
}
document.querySelector('#hangsorismétlések-short-texts').innerHTML = HI_content
}
