<h1>jqmobilediapo</h1>
<p>Create powerful mobile Diaporama using jQuery Mobile.</p>
<p><strong>Note</strong><br />
  All images are not loaded at initialization.<br />
	When you call an image, next is loaded.
</p>
<h2>The plugin has been tested with:</h2>
<p>iPhone 3G+/iPad 1+/iOS 3.5+<br />
	Android 3.0+<br />
	firefox 10+<br />
	Internet Explorer 8+
</p>
<h2>Demo</h2>
<p><a rel="nofollow" href=
	"http://jqmobilediapo.felgueiras.info/">http://jqmobilediapo.felgueiras.info/</a></p>
<h2>Guide</h2>
<p>The library should be loaded after the jquery.js and jquery.mobile.js. Once the
	library is loaded, you can load the diaporama whith "jQMobileDiapo" method on the
	jQuery object, like this:
</p>
<pre class="prettyprint">
&lt;script&gt;
	jQuery('document').ready(function(){
		$("#diapo").jQMobileDiapo({});
	});
&lt;/script&gt;
</pre>
<h2>Options</h2>
<table class="wikitable">
	<tbody>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;"><strong>OPTION</strong></td>
			<td style="border: 1px solid #ccc; padding: 5px;"><strong>DEFAULT</strong></td>
			<td style="border: 1px solid #ccc; padding: 5px;"><strong>HINT</strong></td>
			<td style="border: 1px solid #ccc; padding: 5px;"><strong>EXAMPLE</strong></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">prevId</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'prevBtn'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'previous' id</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">prevText</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'&lt;&lt;'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'previous' text</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">nextId</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'nextBtn'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'next' id</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">nextText</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'&gt;&gt;'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'next' text</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">backId</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'backBtn'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'back' id</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">backText</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'Back'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'back' text</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">backLink</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'#'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">button 'back' link</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">controlsShow</td>
			<td style="border: 1px solid #ccc; padding: 5px;">true</td>
			<td style="border: 1px solid #ccc; padding: 5px;">show control buttons</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">speed</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'250'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">image transition speed</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">btnTime</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'2000'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">control buttons time</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">imgReplace</td>
			<td style="border: 1px solid #ccc; padding: 5px;">'image/no-image.jpg'</td>
			<td style="border: 1px solid #ccc; padding: 5px;">default image</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><i>N/A</i></td>
		</tr>
		<tr>
			<td style="border: 1px solid #ccc; padding: 5px;">images</td>
			<td style="border: 1px solid #ccc; padding: 5px;"><a href=""></a></td>
			<td style="border: 1px solid #ccc; padding: 5px;">images list</td>
			<td style="border: 1px solid #ccc; padding: 5px;">['image1', 'image2', 'image3']</td>
		</tr>
	</tbody>
</table>
