<aside class="comment_results">
    <h3>{$CONST.COMMENT_SEARCHRESULTS|sprintf:$comment_searchresults}:</h3>

    <ul class="plainList">
    {foreach from=$comment_results item="result"}
        <li><span>{if $result.type == 'TRACKBACK'}<a href="{$result.url|@escape}">{else}<b>{/if}{$result.author|@escape}{if $result.type == 'TRACKBACK'}</a>{else}</b>{/if} {$CONST.IN} <a href="{$result.permalink|@escape}">{$result.title|@escape}</a> {$CONST.ON} <time>{$result.ctimestamp|@formatTime:$template_option.date_format}</time>:</span>
        {$result.comment|@strip_tags|@truncate:200:" ... "}
    </li>
    {/foreach}
    </ul>
</aside>