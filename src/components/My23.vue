<template>
        <div>
        <main class="main background-dna">
        <section class="featured emblem">
            <article class="sector sector-featured">
                <div class="my23__partition">
                    <div class="sector__maintitle ">Chromosome Data
                    <img class="home__arrow " src="https://res.cloudinary.com/chromagene/image/upload/v1628704653/dna/chevron_right-24px_p2z0sa.svg" alt="img"/>
                    </div>
                </div>
                <table  id="content" class="my23__table">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>img</th>
                    <th>chromosome</th>
                    <th>genotype</th>
                    <th>data</th>
                    <th>scientificname</th>
                    <th>position</th>
                    <th>type</th>
                    <th>ribosome</th>
                    </tr>
                </thead>
                <tbody>
                    {my23Api.map(my23 => {
                    return (
                        <tr >
                        <td>{my23.id}</td>
                        <td>{my23.img}</td>
                        <td>{my23.chromosome}</td>
                        <td>{my23.genotype}</td>
                        <td>{my23.data}</td>
                        <td>{my23.scientificname}</td>
                        <td>{my23.position}</td>
                        <td>{my23.type}</td>
                        <td>{my23.ribosome}</td>
                    </tr>
                    );
                    }
                )}
                </tbody>
                </table>
            </article>
            </section>    
        </main>
    </div>
</template>
<script></script>
<style></style>