@php
    $confirm = $confirm ?? 'Are you sure?';
@endphp
<div class="row-actions row-actions--icons" role="group" aria-label="Actions">
    <a class="row-action row-action--edit" href="{{ $editUrl }}" title="Edit" aria-label="Edit">
        <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
    </a>
    <form method="post" action="{{ $destroyUrl }}" class="row-action-form" onsubmit='return confirm({!! json_encode($confirm) !!});'>
        @csrf
        @method('DELETE')
        <button type="submit" class="row-action row-action--delete" title="Delete" aria-label="Delete">
            <i class="fa-solid fa-trash" aria-hidden="true"></i>
        </button>
    </form>
</div>
