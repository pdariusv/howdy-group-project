const context = {
  termOfUse : [
    {
      name:"ownership",
      title:"Ownership of Site; Agreement to Terms of Use",
      content: "These Terms and Conditions of Use (the \"Terms of Use\") apply to the Apple web site located at www.apple.com, and all associated sites linked to www.apple.com by Apple, its subsidiaries and affiliates, including Apple sites around the world (collectively, the \"Site\"). The Site is the property of Apple Inc. (\"Apple\") and its licensors. BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE THE SITE.Apple reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for changes. Your continued use of the Site following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms of Use, Apple grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Site."
    },
    {
      name:"content",
      title: "Content",
      content: "All text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code (collectively, \"Content\"), including but not limited to the design, structure, selection, coordination, expression, \"look and feel\" and arrangement of such Content, contained on the Site is owned, controlled or licensed by or to Apple, and is protected by trade dress, copyright, patent and trademark laws, and various other intellectual property rights and unfair competition laws.Except as expressly provided in these Terms of Use, no part of the Site and no Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including \"mirroring\") to any other computer, server, Web site or other medium for publication or distribution or for any commercial enterprise, without Apple’s express prior written consent.You may use information on Apple products and services (such as data sheets, knowledge base articles, and similar materials) purposely made available by Apple for downloading from the Site, provided that you (1) not remove any proprietary notice language in all copies of such documents, (2) use such information only for your personal, non-commercial informational purpose and do not copy or post such information on any networked computer or broadcast it in any media, (3) make no modifications to any such information, and (4) not make any additional representations or warranties relating to such documents."
    }
  ]
}



const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('sub-section').innerHTML = compiledHtml;